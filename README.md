# Blaxel Similar Company Finder Agent

<p align="center">
  <img src="https://blaxel.ai/logo.png" alt="Blaxel" width="200"/>
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js 18+](https://img.shields.io/badge/node-18+-green.svg)](https://nodejs.org/en/download)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.8+-blue.svg)](https://www.typescriptlang.org/)
[![LangGraph](https://img.shields.io/badge/LangGraph-powered-brightgreen.svg)](https://github.com/langchain-ai/langgraph)
[![Qdrant](https://img.shields.io/badge/Qdrant-vector_db-red.svg)](https://qdrant.tech/)
[![Exa](https://img.shields.io/badge/Exa-search-blue.svg)](https://exa.ai/)

</div>

An intelligent business analysis agent that finds and analyzes companies similar to a given target company. This agent leverages multiple data sources including Exa search, Qdrant vector database for persistent storage, and Gmail integration for automated report delivery. Built with LangGraph and TypeScript for robust performance and comprehensive competitive analysis.

## 📑 Table of Contents

- [✨ Features](#features)
- [🚀 Quick Start](#quick-start)
- [📋 Prerequisites](#prerequisites)
- [💻 Installation](#installation)
- [🔧 Usage](#usage)
  - [Running Locally](#running-locally)
  - [Testing](#testing)
  - [Deployment](#deployment)
- [📁 Project Structure](#project-structure)
- [❓ Troubleshooting](#troubleshooting)
- [👥 Contributing](#contributing)
- [🆘 Support](#support)
- [📄 License](#license)

## ✨ Features

- Intelligent similar company discovery using Exa search and web data
- Comprehensive competitive analysis across 5 key business dimensions
- Vector-based data storage and retrieval using Qdrant for persistent analysis
- Automated email report delivery via Gmail integration
- Multi-dimensional analysis including market positioning, business models, and financials
- LangGraph-powered agent with tool integration and state management
- Streaming responses for real-time interaction
- TypeScript implementation with robust type safety
- Easy deployment and integration with Blaxel platform

## 🚀 Quick Start

For those who want to get up and running quickly:

```bash
# Clone the repository
git clone https://github.com/blaxel-ai/template-similar-company-finder.git

# Navigate to the project directory
cd template-similar-company-finder

# Install dependencies
npm install

# Set up environment variables
cp .env-sample .env
# Edit .env with your API keys and configurations

# Start the development server
npm run dev

# In another terminal, deploy to Blaxel
bl deploy

# Test the agent
bl chat --local similar-company-finder
```

## 📋 Prerequisites

- **Node.js:** 18.0 or later
- **[NPM](https://www.npmjs.com/):** Node package manager
- **Qdrant Database:** For vector storage and analysis persistence
- **Exa API Access:** For comprehensive web search and company data
- **Gmail Integration:** For automated report delivery. Go to your workspace on https://app.blaxel.ai and create a Gmail integration
- **[Blaxel CLI](https://docs.blaxel.ai/Get-started):** Ensure you have the Blaxel CLI installed. If not, install it globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel-ai/toolkit/main/install.sh | BINDIR=/usr/local/bin sudo -E sh
  ```
- **Blaxel login:** Login to Blaxel platform
  ```bash
  bl login YOUR-WORKSPACE
  ```

## 💻 Installation

**Clone the repository and install dependencies:**

```bash
git clone https://github.com/blaxel-ai/template-similar-company-finder.git
cd template-similar-company-finder
npm install
```

**Set up environment variables:**

```bash
cp .env-sample .env
```

Edit the `.env` file with your credentials:

```env
# Qdrant Configuration
QDRANT_URL=your-qdrant-url-here
QDRANT_API_KEY=your-qdrant-api-key-here
QDRANT_COLLECTION_NAME=company_analysis

# OpenAI Configuration
OPENAI_API_KEY=your-openai-api-key-here

# Exa Configuration
EXA_API_KEY=your-exa-api-key-here
```

## 🔧 Usage

### Running Locally

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

For production build and run:

```bash
bl serve
```

_Note:_ The development server automatically restarts when you make changes to the source code.

### Testing

You can test your similar company finder agent locally:

```bash
# Using the Blaxel CLI chat interface
bl chat --local similar-company-finder
```

Example queries you can ask:
- "Find companies similar to Slack and send analysis to my-email@company.com"
- "Analyze competitors of Tesla and email the report to analysis@team.com"
- "Compare Shopify with similar e-commerce platforms, send to report@business.com"
- "Research companies like Zoom and deliver comprehensive analysis via email"

### Deployment

When you are ready to deploy your agent:

```bash
bl deploy
```

This command uses your code and the configuration in `blaxel.toml` to deploy your similar company finder as an agent on the Blaxel platform.

## 📁 Project Structure

- **src/index.ts** - Fastify server setup and main application entry point
- **src/agent.ts** - Core LangGraph agent implementation with tool integration
- **src/prompt.md** - Detailed system prompt defining analysis methodology and output format
- **blaxel.toml** - Blaxel deployment configuration with Exa, Gmail, and Qdrant integrations
- **package.json** - NPM package configuration with scripts and dependencies
- **tsconfig.json** - TypeScript compiler configuration
- **.env-sample** - Template for required environment variables

## ❓ Troubleshooting

### Common Issues

1. **Blaxel Platform Issues**:
   - Ensure you're logged in to your workspace: `bl login MY-WORKSPACE`
   - Verify models are available: `bl get models`
   - Check that functions exist: `bl get functions`

2. **Exa Search Integration Issues**:
   - Verify Exa API key is valid and properly configured
   - Check API rate limits and usage quotas
   - Ensure search queries are formatted correctly
   - Verify network connectivity to Exa endpoints

3. **Qdrant Vector Database Issues**:
   - Ensure Qdrant API key is valid and properly configured
   - Verify the collection name exists in your Qdrant instance
   - Check that vectors are being stored and retrieved correctly
   - Verify network connectivity to Qdrant endpoint

4. **Gmail Integration Issues**:
   - Verify Gmail integration is properly configured in Blaxel
   - Check OAuth permissions for email sending
   - Ensure recipient email addresses are valid
   - Verify email content is not triggering spam filters

5. **Dependency and Environment Issues**:
   - Make sure you have Node.js 18+
   - Try `npm install` to reinstall dependencies
   - Check for TypeScript compilation errors with `npm run build`
   - Verify all environment variables are properly set

For more help, please [submit an issue](https://github.com/blaxel-templates/template-similar-company-finder/issues) on GitHub.

## 👥 Contributing

Contributions are welcome! Here's how you can contribute:

1. **Fork** the repository
2. **Create** a feature branch:
   ```bash
   git checkout -b feature/amazing-feature
   ```
3. **Commit** your changes:
   ```bash
   git commit -m 'Add amazing feature'
   ```
4. **Push** to the branch:
   ```bash
   git push origin feature/amazing-feature
   ```
5. **Submit** a Pull Request

Please make sure to update tests as appropriate and follow the TypeScript code style of the project.

## 🆘 Support

If you need help with this template:

- [Submit an issue](https://github.com/blaxel-templates/template-similar-company-finder/issues) for bug reports or feature requests
- Visit the [Blaxel Documentation](https://docs.blaxel.ai) for platform guidance
- Check the [LangGraph Documentation](https://langchain-ai.github.io/langgraph/) for framework-specific help
- Review the [Qdrant Documentation](https://qdrant.tech/documentation/) for vector database guidance
- Check the [Exa Documentation](https://docs.exa.ai/) for search API guidance
- Join our [Discord Community](https://discord.gg/G3NqzUPcHP) for real-time assistance

## 📄 License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.