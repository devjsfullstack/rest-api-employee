import express, { Application, application } from "express"
import { Server } from "./src/app"
import http from 'http'

const app: Application = express()

const server: Server = new Server(app)

server.init();