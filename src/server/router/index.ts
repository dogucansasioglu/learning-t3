// src/server/router/index.ts
import { createRouter } from './context';
import superjson from 'superjson';

import { exampleRouter } from './example';
import { protectedExampleRouter } from './protected-example-router';
import { postRouter } from './post';

export const appRouter = createRouter()
  .transformer(superjson)
  .merge('example.', exampleRouter)
  .merge('post.', postRouter)
  .merge('auth.', protectedExampleRouter);

// export type definition of API
export type AppRouter = typeof appRouter;
