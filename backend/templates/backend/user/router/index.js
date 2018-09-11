import userRouter from './user.router'

export default function useUserRouters (app) {
  app.use('/user', userRouter)
}
