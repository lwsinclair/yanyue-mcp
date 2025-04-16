# YanYue MCP

一个 MCP server，从烟悦网(yanyue.cn)获取卷烟数据。
它提供以下工具：

• `searchCigarettes(keyword: str)`：根据关键词搜索卷烟信息

## 系统要求

• Node.js 18.16.0 或更高版本
• npm 9.5.1 或更高版本
• 推荐使用 Bun 以获得更好性能

## 安装

1. 克隆仓库并安装依赖：

```bash
git clone --depth 1 git@gandli:yanyue-mcp/yanyue-mcp.git
cd yanyue-mcp
npm install
# 或使用 Bun:
bun install
```

2. 构建项目：

```bash
npm run build
# 或使用 Bun:
bun run build
```

## MCP 客户端配置

在您的 MCP 客户端配置文件(config.json)中添加以下配置：

```json
{
  "mcpServers": {
    "yanyue_mcp": {
      "name": "YanYue Cigarette Data",
      "description": "从烟悦网获取卷烟数据",
      "type": "stdio",
      "command": "node",
      "args": ["path/to/build/index.js"]
    }
  }
}
```
