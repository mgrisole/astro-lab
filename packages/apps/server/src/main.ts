import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import {AstronautManagerRouter} from "./domains/astronauts-manager/router";

const app = new Koa();

const PORT = process.env.PORT || 7654;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  }),
);
app.use(logger());

app.use(AstronautManagerRouter.routes())
app.use(AstronautManagerRouter.allowedMethods())

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
