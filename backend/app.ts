import { PrismaClient } from '@prisma/client'
import express, { Express, Request, response, Response, NextFunction} from "express";
import { request } from 'http';
import routes from './routes/routes'

const app: Express = express()

app.use(function (req: Request, res: Response, next: NextFunction) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:5173');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
});

app.use('/', routes)

app.listen(6969, () =>{
    console.log("Server Running!");
})


