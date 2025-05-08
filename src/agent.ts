import { blModel, blTools } from "@blaxel/langgraph";
import { HumanMessage } from "@langchain/core/messages";
import { createReactAgent } from "@langchain/langgraph/prebuilt";
import fs from "fs";

interface Stream {
  write: (data: string) => void;
  end: () => void;
}

export default async function agent(
  input: string,
  stream: Stream
): Promise<void> {
  const prompt = fs.readFileSync("./src/prompt.md", "utf8");
  const platformTools = await blTools(["exa", "gmail", "qdrant"]);
  const model = await blModel("gpt-4o-mini");
  const streamResponse = await createReactAgent({
    llm: await model,
    tools: [...(await platformTools)],
    prompt,
  }).stream({
    messages: [new HumanMessage(input)],
  });

  for await (const chunk of streamResponse) {
    if (chunk.agent)
      for (const message of chunk.agent.messages) {
        stream.write(message.content);
      }
  }
  stream.end();
}
