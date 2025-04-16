# Yanyue MCP <img src="https://www.Yanyue.cn/favicon.ico" style="zoom:25%;" />

An MCP server that fetches cigarette data from Yanyue (Yanyue.cn).  
It provides the following tool:

• `searchCigarettes(keyword: str)`: Search for cigarette information based on a keyword.

## System Requirements

• Node.js version 18.16.0 or higher  
• npm version 9.5.1 or higher  
• Bun is recommended for better performance

## Installation

1. Clone the repository and install dependencies:

```bash
git clone --depth 1 git@gandli:Yanyue-mcp/Yanyue-mcp.git
cd Yanyue-mcp
npm install
# Or use Bun:
bun install
```

2. Build the project:

```bash
npm run build
# Or use Bun:
bun run build
```

## MCP Client Configuration

Add the following configuration to your MCP client’s `config.json`:

```json
{
  "mcpServers": {
    "Yanyue_mcp": {
      "name": "Yanyue Cigarette Data",
      "description": "Fetch cigarette data from Yanyue",
      "type": "stdio",
      "command": "node",
      "args": ["path/to/build/index.js"]
    }
  }
}
```