import { Express } from 'express'
import PingHandler from './handlers/ping'

const RegisterRoutes = (app: Express) => {
    app.get('/', PingHandler)
    return app
}

export default RegisterRoutes