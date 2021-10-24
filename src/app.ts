import express from 'express'
import RegisterRoutes from './router'

class App {
    ea: express.Express
    port: number
    host: string
    logger: Console

    Listen() {
        this.ea.listen(this.port, this.host, () => {
            this.logger.log(`App listening at http://${this.host}:${this.port}`)
        })
    }

    constructor(expressApp: express.Express, port: number) {
        this.port = port
        this.ea = expressApp
        this.host = "0.0.0.0"
        this.logger = console
    }
}

// TODO: Import Config
export const InitApp = () => {
    let expressApp = express()
    expressApp = RegisterRoutes(expressApp)
    return new App(expressApp, 3000)
}

