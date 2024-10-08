import express, { Express, Request, Response, NextFunction } from "express";
import routes from './routes/routes'
import * as dotenv from 'dotenv'
//import corsHeaders from './middlewares/cors'





class Server {

    public app: express.Application;

    constructor() {
        this.app = express();
        this.config();
    }

    private config(): void {
        const cors = require('cors')
        //this.app.use(corsHeaders);
        this.app.use('/', routes)
        this.app.use(cors)
        dotenv.configDotenv()
    }

    public listen(port: number){
        this.app.listen(port, () => {
            console.log("Server Running!");
        })
    }

}

const server: Server = new Server();
let port  = parseInt(process.env.PORT as string)
if(!port){
    port = 5678;
    console.log(`PORT env variable not specified! Starting at ${port}`)
}
server.listen(port);

