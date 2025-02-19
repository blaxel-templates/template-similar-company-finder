# 🔍 Find Similar Companies Agent

This repository is a demo implementation of a Find Similar Companies agent built using the [Blaxel SDK](https://blaxel.ai) and [LangChain](https://langchain.com). The agent analyzes companies and finds similar ones by leveraging AI, processing HTTP requests, and enriching conversational context with data stored in a Qdrant-based knowledge base. Once the analysis is complete, the agent automatically generates and sends detailed comparison reports via email.

## 🚀 Prerequisites

- **Node.js:** v20 or later
- **Blaxel CLI:** Install globally:
  ```bash
  curl -fsSL https://raw.githubusercontent.com/blaxel/toolkit/main/install.sh | BINDIR=$HOME/.local/bin sh
  ```
- **Blaxel login:** Login to your workspace:
  ```bash
  bl login YOUR-WORKSPACE
  ```

## ⚙️ Installation

1. Clone and install dependencies:
   ```bash
   git clone https://github.com/your-repo/similar-company-finder.git
   cd similar-company-finder
   npm install
   ```

2. Set up Gmail Integration:
   - Follow the setup guide at [Blaxel Gmail Integration](https://docs.blaxel.ai/Integrations/Gmail)
   - Sign in to your Google account to create the Gmail integration in your workspace settings

3. Configure environment variables:
   ```bash
   cp .env-sample .env
   ```
   Update the following in your `.env`:
   - Qdrant configuration: `QDRANT_URL`, `QDRANT_API_KEY`, `QDRANT_COLLECTION_NAME`
   - OpenAI API key: `OPENAI_API_KEY`
   - Exa API key: `EXA_API_KEY`
   - Gmail Integration Name: `GMAIL_INTEGRATION_NAME`


4. Register your Blaxel components:
   ```bash
   bl apply -R -f .blaxel
   ```

## ✨ Features

- 🤖 Company similarity analysis using advanced AI models
- 🗄️ Integration with Qdrant vector database for knowledge storage
- 🔎 Real-time company research via Exa
- 📧 Automated email delivery of detailed comparison reports
- 📊 Comprehensive comparison across multiple dimensions:
  - Market & Industry (25%)
  - Business Model (25%)
  - Financials (20%)
  - Product & Technology (15%)
  - Strategic Position (15%)

## 💻 Development

Start the development server with hot reloading:

```bash
bl serve --hotreload
```

To test the agent, open a new terminal and run:

```bash
bl chat similar-company-finder --local
```

This will open an interactive chat session with your local agent where you can test company similarity analysis.

## 🗣️ Example Prompts

Here are some example prompts to get started with the agent:

- ```
  Find companies similar to Stripe in the payment processing space and send me an email back at myemail@domain.com
  ```

- ```
  Compare Airbnb with other companies in the travel and hospitality sector and send me an email back at myemail@domain.com
  ```

- ```
  What companies are similar to Tesla in terms of electric vehicles and sustainable energy? Please send me an email back at myemail@domain.com
  ```

- ```
  Find B2B SaaS companies similar to Salesforce and send me an email back at myemail@domain.com
  ```

- ```
  Can you analyze companies similar to Shopify in the e-commerce platform space and send me an email back at myemail@domain.com
  ```

Each analysis will generate a detailed comparison report that will be sent to your email, covering aspects like market position, business model, financials, and technology stack.

## 🚀 Deployment

Deploy to Blaxel:

```bash
bl deploy
```

## 📁 Project Structure

- **src/**
  - `agent.ts` - Main agent configuration and request handling
- **.blaxel/**
  - Configuration for functions, models, and integrations
- **index.ts** - Application entry point

## 📄 License

MIT Licensed. See [LICENSE](LICENSE) for details.