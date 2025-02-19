import { createApp, logger, runApp } from "@blaxel/sdk";

createApp()
  .then((app) => runApp(app))
  .catch((err) => logger.error(err));
