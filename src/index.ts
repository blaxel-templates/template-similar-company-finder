import { logger } from '@blaxel/sdk';
import Fastify from 'fastify';
import agent from './agent';

interface RequestBody {
  inputs: string;
}

async function main() {
  logger.info("Booting up...")
  const app = Fastify();

  app.addHook('onRequest', async (request, reply) => {
    logger.info(`${request.method} ${request.url}`)
  });

  app.post<{ Body: RequestBody }>('/', async (request, reply) => {
    try {
      await agent(request.body.inputs, reply.raw)
    } catch (error: any) {
      logger.error(error)
      return reply.status(500).send(error.stack)
    }
  })
  const port = parseInt(process.env.BL_SERVER_PORT || '80');
  const host = process.env.BL_SERVER_HOST || '0.0.0.0';
  try {
    await app.listen({ port, host })
    logger.info(`Server is running on port ${host}:${port}`);
  } catch (err) {
    logger.error(err)
    process.exit(1)
  }
}

main().catch(console.error);


