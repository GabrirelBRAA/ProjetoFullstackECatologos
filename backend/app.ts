import express, { Express, Request, Response, NextFunction } from "express";
import routes from './routes/routes'
import * as dotenv from 'dotenv'
import corsHeaders from './middlewares/cors'

dotenv.configDotenv()

class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        this.app.use('/', routes)
        this.app.use(corsHeaders);
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log("Server Running!");
        })
    }

}

const server: Server = new Server();
const port  = parseInt(process.env.PORT as string)
server.listen(port);

