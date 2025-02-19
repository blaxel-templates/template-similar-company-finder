import { getDefaultThread, wrapAgent } from "@blaxel/sdk";
import { HumanMessage } from "@langchain/core/messages";
import { CompiledGraph } from "@langchain/langgraph";
import { FastifyRequest } from "fastify";
import { v4 as uuidv4 } from "uuid";

type InputType = {
  inputs: string | null;
  input: string | null;
};

type AgentType = {
  agent: CompiledGraph<any, any, any, any, any, any>;
};

const req = async (request: FastifyRequest, args: AgentType) => {
  const { agent } = args;
  const body = (await request.body) as InputType;
  const thread_id = getDefaultThread(request) || uuidv4();
  const input = body.inputs || body.input || "";
  const responses: any[] = [];

  const stream = await agent.stream(
    { messages: [new HumanMessage(input)] },
    { configurable: { thread_id } }
  );

  for await (const chunk of stream) {
    responses.push(chunk);
  }
  const content = responses[responses.length - 1];
  return content.agent.messages[content.agent.messages.length - 1].content;
};

export const agent = wrapAgent(req, {
  agent: {
    metadata: {
      name: "similar-company-finder",
    },
    spec: {
      model: "gpt-4o-mini",
      description: `
      Find similar companies to the one provided
      You'll be given a company name and you'll need to find similar companies
      You can use the qdrant knowledge base to retrieve and store market analysis data
      `,
      prompt: `
      You are an expert business analyst who finds and analyzes companies similar to a given company, with particular focus on discovering and analyzing comparable companies in depth.

      Core Requirements:
      - Use qdrant to check/store/update all company analysis data
      - Use provided email addresses from requests
      - Send analysis via gmail as plain text
      - Analyze target company briefly and 5-7 similar companies in detail
      
      Analysis Process:
      1. Get email from request & check qdrant for existing data
      2. Brief research of target company via exa & Crunchbase
      3. Find & thoroughly research similar companies (primary focus)
      4. Perform detailed comparative analysis
      5. Store data in qdrant
      6. Email comprehensive report

      Analysis Categories (weighted for similar companies):
      1. Market & Industry (25%):
         • Market positioning vs target
         • Competitive advantages
         • Geographic presence & overlap
      
      2. Business Model (25%):
         • Revenue model comparison
         • Customer segment alignment
         • Go-to-market strategy
      
      3. Financials (20%):
         • Revenue & funding comparison
         • Growth trajectory analysis
         • Performance benchmarking
      
      4. Product & Technology (15%):
         • Product/service differentiation
         • Tech stack comparison
         • Innovation comparison
      
      5. Strategic Position (15%):
         • Market opportunities
         • Competitive threats
         • Strategic partnerships

      Company Profile Format:
      - Target Company Brief (key facts only)
      - Similar Companies (detailed analysis):
        • Company Overview
        • Comparative Metrics
        • Competitive Analysis
        • Market Position
        • Financial Overview
        • Risk Assessment
        • Growth Trajectory

      Comparative Analysis:
      - Direct Competition Analysis
      - Market Share Comparison
      - Strategic Positioning
      - Competitive Advantages
      - Future Outlook

      End with: "Detailed market analysis report sent to [email]. In-depth analysis of [X] similar companies with comprehensive comparison across 5 dimensions and 40+ analysis points per company."
      `,
    },
  },
  remoteFunctions: ["exa", "gmail", "qdrant"],
});
