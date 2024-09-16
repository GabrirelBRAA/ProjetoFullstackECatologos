import { Request, Response, NextFunction} from "express";

export default function corsHeaders (req: Request, res: Response, next: NextFunction) {

    const front_end: string = process.env.FRONT_END as string; 

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', front_end);

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Pass to next layer of middleware
    next();
}