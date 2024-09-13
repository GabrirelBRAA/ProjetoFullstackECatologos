import { PrismaClient } from '@prisma/client'
import express, { Express, Request, response, Response} from "express";
import { request } from 'http';
import routes from './routes/routes'

const app: Express = express()

app.use('/', routes)

app.listen(6969, () =>{
    console.log("Server Running!");
})


