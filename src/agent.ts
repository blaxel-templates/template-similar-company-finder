import { getDefaultThread, wrapAgent } from "@blaxel/sdk";
import { HumanMessage } from "@langchain/core/messages";
import { CompiledGraph } from "@langchain/langgraph";
import { FastifyRequest } from "fastify";
import { v4 as uuidv4 } from "uuid";
import { prompt } from "./prompt";

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
      prompt: prompt,
    },
  },
  remoteFunctions: ["exa", "gmail", "qdrant"],
});
