import express, { Application } from "express"
import cors from 'cors'
import helmet from "helmet"
import {join} from "path"
import { useContainer, useExpressServer } from "routing-controllers"
import Container from "typedi"
import http from 'http'
import { Logger } from "./services/logger-service"
import 'dotenv/config'
import { sequelizeConnection } from "./services/sequelize-mysql-service"
import 'reflect-metadata'
import morgan from "morgan"

export class Server {

    app: Application
    httpServer: http.Server = http.createServer()

    constructor(app: Application) {
        this.app = app
        this.routes()
        this.middlewares()
    }

    middlewares(): void {
        // this.app.use(cors())
        // this.app.use(helmet())
        this.app.use(morgan('combined'))
        this.app.use(express.json({limit: '50mb'}))
        this.app.use(express.urlencoded({extended: true, limit: '50mb'}))
        this.app.use('/static', express.static(join(__dirname, 'public')))
    }

    routes(): void {
        useContainer(Container)

        useExpressServer(this.app, {
            cors: {
                origin: function(origin: string, callback: (arg0: Error | null, arg1: boolean) => void) {
                    if (process.env.WHITELIST?.split(' ').indexOf(origin!) !== -1) {
                        callback(null, true)
                    } else {
                        callback(new Error('Not allowed by CORS'), false)
                    }
                },
                methods: ['GET','POST','DELETE','UPDATE','PUT']
            },
            routePrefix: `${process.env.API_ROOT}`,
            defaultErrorHandler: false,
            controllers: [`${__dirname}/**/Controllers/*{.js,.ts}`]
        })
    }

    init(): void | string {
        this.httpServer = http.createServer(this.app)

        this.httpServer.listen(process.env.PORT, () => {
            Logger.info('Server', 'Application running on', `${process.env.HOST}:${process.env.PORT}`)
            
            sequelizeConnection()
        })
    }
}