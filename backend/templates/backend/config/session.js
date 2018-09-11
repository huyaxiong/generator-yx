import session from 'express-session'

let sessionMiddleware = session({
  secret: 'app',
  cookie: { maxAge: 7 * 24 * 60 * 60 * 1000 },
  resave: true,
  saveUninitialized: true
})

export default sessionMiddleware
