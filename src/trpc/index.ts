
import { publicProcedure, router } from './trpc'


export const appRouter = router({
 
anyApiRoute: publicProcedure.query(() => {
  return "hello from api router"
})
})

export type AppRouter = typeof appRouter
