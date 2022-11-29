import Router from 'koa-router'
import {Astronaut} from "@astro-lab/prisma-client";
import {createAstronaut} from "@astro-lab/database";

const router = new Router({
  prefix: '/astronaut-manager/'
});

router.post('create', async (ctx, next) => {
  const astronaut = ctx.request.body as Astronaut;
  await createAstronaut(astronaut).then(console.log).catch(console.log);
  ctx.status = 200;
  await next();
})

export const AstronautManagerRouter = router;
