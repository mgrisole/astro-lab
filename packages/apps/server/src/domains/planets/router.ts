import Router from 'koa-router'
import {fetchAllPlanets} from "@astro-lab/database";

const router = new Router({
  prefix: '/planets/'
});

router.post('fetch-all', async (ctx, next) => {
  ctx.body = await fetchAllPlanets();
  ctx.status = 200;
  await next();
})

export const PlanetsRouter = router;
