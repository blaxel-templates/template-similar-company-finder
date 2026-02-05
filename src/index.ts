import { env } from "@blaxel/core";
import '@blaxel/telemetry';
import Fastify from "fastify";
import agent from "./agent.js";

interface RequestBody {
  inputs: string;
}

async function main() {
  console.info("Booting up...");
  const app = Fastify();

  app.addHook("onResponse", async (request, reply) => {
    console.info(`${request.method} ${request.url} ${reply.statusCode} ${Math.round(reply.elapsedTime)}ms`);
  });

  app.addHook("onError", async (request, reply, error) => {
    console.error(error);
  });

  app.post<{ Body: RequestBody }>("/", async (request, reply) => {
    try {
      // Set headers to disable proxy/CDN buffering (CloudFront, nginx, etc.)
      reply.raw.writeHead(200, {
        "Content-Type": "text/plain; charset=utf-8",
        "Transfer-Encoding": "chunked",
        "Cache-Control": "no-cache, no-transform",
        "X-Accel-Buffering": "no",
        "Connection": "keep-alive",
      });
      await agent(request.body.inputs, reply.raw);
    } catch (error: any) {
      console.error(error);
      if (!reply.raw.headersSent) {
        return reply.status(500).send(error.stack);
      }
      reply.raw.end(`\n❌ Error: ${error.stack}`);
    }
  });
  const port = parseInt(env.PORT || "80");
  const host = env.HOST || "0.0.0.0";
  try {
    await app.listen({ port, host });
    console.info(`Server is running on port ${host}:${port}`);
  } catch (err) {
    console.error(err);
    process.exit(1);
  }
}

main().catch(console.error);
