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
  const model = await blModel("sandbox-openai");
  const graph = createReactAgent({
    llm: await model,
    tools: [...(await platformTools)],
    prompt,
  });

  const streamResponse = graph.streamEvents(
    {
      messages: [new HumanMessage(input)],
    },
    {
      version: "v2",
    }
  );

  for await (const event of streamResponse) {
    if (event.event === "on_chat_model_stream") {
      const chunk = event.data.chunk;
      if (chunk && chunk.content) {
        const content = typeof chunk.content === "string" ? chunk.content : String(chunk.content);
        if (content && (!chunk.tool_call_chunks || chunk.tool_call_chunks.length === 0)) {
          stream.write(content);
        }
      }
    }
  }

  stream.end();
}
