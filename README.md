# 🔍 Find Similar Companies Agent

[![Node.js >= 20](https://img.shields.io/badge/node-%3E%3D20-green)](https://nodejs.org/) [![License: MIT](https://img.shields.io/badge/license-MIT-blue)](LICENSE)

This repository demonstrates a Find Similar Companies agent built with the [Blaxel SDK](https://blaxel.ai) and [LangChain](https://langchain.com). The agent analyzes a target company and finds comparable companies using AI, enriches results via a Qdrant vector database, and emails detailed reports.

<p align="center">
  <img src="./assets/illustration.jpeg" width="600" alt="Find Similar Companies Agent">
</p>

## 📖 Table of Contents

- [Prerequisites](#-prerequisites)
- [Installation](#-installation)
- [Configuration](#-configuration)
- [Usage](#-usage)
- [Features](#-features)
- [Development](#-development)
- [Example Prompts](#-example-prompts)
- [Deployment](#-deployment)
- [Project Structure](#-project-structure)
- [Contributing](#-contributing)
- [License](#-license)

## 🎯 Prerequisites

- Node.js >= 20
- [Blaxel CLI](https://docs.blaxel.ai/cli) installed globally
- Blaxel workspace access

## 🚀 Installation

```bash
git clone https://github.com/blaxel-templates/similar-company-finder.git
cd similar-company-finder
npm install
```

## ⚙️ Configuration

1. Set up Gmail Integration:
   - Follow the guide: [Blaxel Gmail Integration](https://docs.blaxel.ai/Integrations/Gmail)
   - Sign in to Google and register the integration in your workspace.
2. Copy and edit environment variables:
   ```bash
   cp .env-sample .env
   ```
   Update `.env` with:
   - `QDRANT_URL`, `QDRANT_API_KEY`, `QDRANT_COLLECTION_NAME`
   - `OPENAI_API_KEY`
   - `EXA_API_KEY`
   - `GMAIL_INTEGRATION_NAME`

3. Register Blaxel components:
   ```bash
   bl apply -R -f .blaxel
   ```

## 💡 Usage

Start the agent locally and chat:

```bash
bl serve --hotreload
bl chat similar-company-finder --local
```

## 🎨 Features

- Company similarity analysis with AI models
- Qdrant vector database for context storage
- Real-time research via Exa.ai
- Automated email delivery of comparison reports
- Multi-dimensional comparison:
  - Market & Industry (25%)
  - Business Model (25%)
  - Financials (20%)
  - Product & Technology (15%)
  - Strategic Position (15%)

## 👩‍💻 Development

Hot-reload server:

```bash
bl serve --hotreload
```

## 📢 Example Prompts

```txt
Find companies similar to Stripe in the payment processing space and email me at me@domain.com
```

```txt
Compare Airbnb with other travel and hospitality companies and email me at me@domain.com
```

## ☁️ Deployment

```bash
bl deploy
```

## 📂 Project Structure

```
src/
  └─ agent.ts      # Main agent config and handlers
.blaxel/           # Blaxel functions, models, integrations
index.ts          # Application entry point
```

## 🤝 Contributing

Contributions welcome! Please:

1. Fork the repository.
2. Create a branch: `git checkout -b feature/your-feature`.
3. Commit your changes.
4. Submit a pull request.

See [CODE_OF_CONDUCT.md](CODE_OF_CONDUCT.md) for details.

## 📜 License

MIT © [Blaxel.ai](https://blaxel.ai)