import Router from 'koa-router'
import {createAstronaut, fetchAllAstronauts, removeAstronaut} from "@astro-lab/database";
import {Astronaut} from "@astro-lab/definitions";

const router = new Router({
  prefix: '/astronauts/'
});

router.post('create', async (ctx, next) => {
  console.log(1231, ctx.request.body)
  const astronaut = ctx.request.body as Astronaut;
  await createAstronaut(astronaut);
  ctx.status = 200;
  await next();
})

router.post('fetch-all', async (ctx, next) => {
  ctx.body = await fetchAllAstronauts();
  ctx.status = 200;
  await next();
})

router.post('remove-one', async (ctx, next) => {
  await removeAstronaut((ctx.request.body as {id: string}).id);
  ctx.status = 200;
  await next();
})

export const AstronautsRouter = router;
