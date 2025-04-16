### Overview of Yanyue MCP

#### What is Yanyue MCP Server?

Yanyue MCP Server is a tool designed to fetch cigarette data from the Yanyue website (Yanyue.cn). This server acts as an interface that allows developers and applications to access and search for cigarette-related data directly from Yanyue's online platform, making it a valuable resource for anyone needing up-to-date and comprehensive cigarette information.

#### How to Use Yanyue MCP Server?

Please read the README.

#### Key Features of Yanyue MCP Server

- **Search Functionality:** You can search for cigarette data using the `searchCigarettes(keyword: str)` function, allowing you to easily retrieve relevant information.
- **Command-Line Integration:** The server works with standard tools like Node.js and Bun, offering flexibility in how it is run and integrated.
- **Optimized Performance:** Using Bun for installation and execution can provide better performance for high-demand queries.
- **Cross-Platform Compatibility:** The server runs on Node.js and is compatible with systems supporting Node.js 18.16.0 or higher.
- **Modular Client Integration:** The server can be integrated with various MCP clients by configuring a simple JSON file, making it adaptable to different use cases.

#### Use Cases of Yanyue MCP Server

- **Cigarette Data Retrieval:** Developers building applications or websites that need to display up-to-date cigarette information can integrate the Yanyue MCP Server to fetch data in real-time.
- **Data Analysis:** Researchers or data analysts can use this tool to aggregate cigarette data for trend analysis, market research, or policy planning.
- **Consumer Applications:** Mobile apps or websites that help consumers compare cigarette brands, prices, or nicotine content can use this server to power their search features.
- **Enterprise Solutions:** Businesses in the tobacco industry can integrate this server to keep track of product availability and specifications.

#### FAQ from Yanyue MCP Server

1. **What version of Node.js is required?**
   - Node.js version 18.16.0 or higher is required to run the Yanyue MCP Server.

2. **Can I use Bun instead of npm?**
   - Yes, Bun is recommended for better performance, but npm can also be used to install dependencies and build the project.

3. **What is the purpose of the `searchCigarettes` function?**
   - The `searchCigarettes` function allows you to search for cigarette data by a specified keyword, helping you quickly retrieve relevant product information.

4. **How do I configure the server for use with an MCP client?**
   - You can configure the server by adding the provided configuration to the MCP client's `config.json` file. This links the client to the Yanyue MCP Server.

5. **Is this MCP Server suitable for production environments?**
   - Yes, once configured and built, the Yanyue MCP Server can be used in production environments to retrieve cigarette data as needed.
