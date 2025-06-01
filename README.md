# 🦢 Find Similar Companies Agent

<p align="center">
  <img src="./assets/illustration.jpeg" width="600" alt="Find Similar Companies Agent">
</p>

<div align="center">

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Node.js: >=20](https://img.shields.io/badge/Node.js-%3E%3D20-brightgreen.svg)](https://nodejs.org/)
[![Blaxel CLI](https://img.shields.io/badge/Blaxel%20CLI-installed-blue.svg)](https://github.com/blaxel/toolkit)

</div>

This repository is a demo implementation of a Find Similar Companies agent built using the [Blaxel SDK](https://github.com/blaxel/toolkit) and [LangChain](https://github.com/langchain-ai/langchain). The agent analyzes companies and finds similar ones by leveraging AI, processing HTTP requests, and enriching conversational context with data stored in a Qdrant-based knowledge base. Once the analysis is complete, the agent automatically generates and sends detailed comparison reports via email.

## Table of Contents

- [Features](#features)
- [Quick Start](#quick-start)
  - [Prerequisites](#prerequisites)
  - [Installation](#installation)
  - [Configuration](#configuration)
- [Usage](#usage)
- [API Reference](#api-reference)
- [Examples](#examples)
- [Development](#development)
- [Project Structure](#project-structure)
- [Contributing](#contributing)
- [Support](#support)
- [License](#license)

## Features

- Company similarity analysis using advanced AI models
- Conversational context enrichment with Qdrant vector database
- Automated report generation and email delivery via SendGrid
- Integration with Blaxel SDK and LangChain
- HTTP REST API endpoints for agent execution

## Quick Start

### Prerequisites

- Node.js v20 or later
- Blaxel CLI installed globally:
  ```bash
  npm install -g @blaxel/toolkit
  ```
- Login to your Blaxel workspace:
  ```bash
  blx login YOUR-WORKSPACE
  ```

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/blaxel-templates/template-similar-company-finder.git
   cd template-similar-company-finder
   ```
2. Install dependencies:
   ```bash
   npm install
   ```

### Configuration

1. **Set up Gmail integration**:
   - Follow the guide at [Blaxel Gmail Integration](https://docs.blaxel.ai/Integrations/Gmail).
2. **Configure environment variables** in a `.env` file:
   ```bash
   QDRANT_HOST=localhost
   QDRANT_COLLECTION_NAME=similar_companies
   OPENAI_API_KEY=your-openai-key
   SENDGRID_API_KEY=your-sendgrid-key
   ```
3. **Register Blaxel components**:
   ```bash
   blx apply -R -f .blaxel
   ```
4. **Register Gmail integration**:
   ```bash
   blx register gmail YOUR_GMAIL_INTEGRATION_ID
   ```
5. **Register SendGrid integration**:
   ```bash
   blx register sendgrid YOUR_SENDGRID_INTEGRATION_ID
   ```

## Usage

Run the agent locally with hot reload:

```bash
blx serve --hotreload
```

## API Reference

- **POST** `/agents/{agent_id}/run`: Execute the agent with provided input
- **GET** `/agents/{agent_id}/info`: Retrieve agent capabilities and metadata

## Examples

Example request to find similar companies:

```bash
curl -X POST http://localhost:3000/agents/find-similar-company/run \
  -H "Content-Type: application/json" \
  -d '{"input": "Find companies similar to Stripe in payment processing"}'
```

## Development

Start the development server with hot reload:

```bash
blx serve --hotreload
```

## Project Structure

```
assets/              # Illustrations and static assets
.blaxel/             # Blaxel configuration files
src/                 # Source code for agents, integrations, and utilities
  agents/            # Agent definitions and request handlers
  utils/             # Helper modules and services
``` 

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository
2. Create a feature branch:
   ```bash
   git checkout -b your-feature-branch
   ```
3. Make your changes and commit:
   ```bash
   git commit -m "feat: add new feature"
   ```
4. Push to your fork and open a pull request

Please ensure tests pass and code style is consistent.

## Support

If you need help, join the interactive chat:

```bash
blx chat --local blaxel-agent
```

## License

MIT License. See [LICENSE](LICENSE) for details.
