import Koa from "koa";
import bodyParser from "koa-bodyparser";
import cors from "koa2-cors";
import logger from "koa-logger";
import {AstronautsRouter} from "./domains/astronauts/router";
import {PlanetsRouter} from "./domains/planets/router";

const app = new Koa();

const PORT = process.env.PORT || 7654;

app.use(bodyParser());
app.use(
  cors({
    origin: "*"
  }),
);
app.use(logger());

app.use(AstronautsRouter.routes())
app.use(AstronautsRouter.allowedMethods())

app.use(PlanetsRouter.routes())
app.use(PlanetsRouter.allowedMethods())

const server = app
  .listen(PORT, async () => {
    console.log(`Server listening on port: ${PORT}`);
  })
  .on("error", err => {
    console.error(err);
  });

export default server;
