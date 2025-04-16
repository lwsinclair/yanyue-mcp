import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
const YANYUE_API_BASE = "https://www.yanyue.cn";
const USER_AGENT = "Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/135.0.0.0 Safari/537.36";
// 辅助函数：发起API请求
async function makeYanyueRequest(url) {
    const headers = {
        "User-Agent": USER_AGENT,
        Accept: "application/json",
    };
    try {
        const response = await fetch(url, { headers });
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        return (await response.json());
    }
    catch (error) {
        console.error("Error request:", error);
        return null;
    }
}
// 格式化搜索结果
function formatResult(product) {
    return {
        id: product.productid,
        name: product.productname,
        chinese_name: product.productname_hascn,
        brand: {
            name: product.brand.brandname,
            origin: product.brand.parent.brandname,
        },
        price: {
            pack: product.packprice,
            single: product.barprice,
            unit: product.priceunit === "0" ? "CNY" : "unknown",
        },
        rating: product.comscore,
        image: product.coverpic,
        specifications: {
            type: product.type.typename,
            tar_content: product.tar,
            nicotine: product.nicotine,
            cigarettes_per_pack: product.cigarette_count,
            length_mm: product.ciglength,
        },
        production: {
            place: product.chandi || "unknown",
        },
    };
}
// 创建MCP服务器实例
const server = new McpServer({ name: "cigarettes", version: "1.0.0" });
// 注册搜索卷烟接口
server.tool("searchCigarettes", "根据关键词搜索卷烟信息", {
    keyword: z.string().min(1).describe("搜索关键词"),
}, async ({ keyword }) => {
    const searchUrl = `${YANYUE_API_BASE}/api/rc/product/yanlist?pagenum=99&productname=${encodeURIComponent(keyword)}`;
    const searchData = await makeYanyueRequest(searchUrl);
    if (!searchData) {
        return {
            content: [
                {
                    type: "text",
                    text: "Failed to retrieve cigarette data",
                },
            ],
        };
    }
    const productlist = searchData.productlist || [];
    if (productlist.length === 0) {
        return {
            content: [
                {
                    type: "text",
                    text: `No results found for ${keyword}`,
                },
            ],
        };
    }
    const formattedResults = productlist.map(formatResult);
    const resultsText = `Search results for "${keyword}":\n\n${JSON.stringify(formattedResults, null, 2)}`;
    return {
        content: [
            {
                type: "text",
                text: resultsText,
            },
        ],
    };
});
// 启动服务器
async function main() {
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error("Weather MCP Server running on stdio");
}
main().catch((error) => {
    console.error("Fatal error in main():", error);
    process.exit(1);
});
