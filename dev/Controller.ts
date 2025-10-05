import {Request, response, Response} from "express";
import {
    Controller,
    Body,
    StatusResponse,
    Post,
    Injectable
} from "../src/index";

import Middleware from "./Middleware";


@Controller("/summer-glove")
export default class MyController {

    @Injectable()
    private middleware: Middleware;

    @Injectable("middleware")
    private middleware2: Middleware;

    @StatusResponse(200)
    @StatusResponse(400)
    @Body({email:"string", password:"string"})
    @Post("/")
    public async Hello(request: Request, response: Response): Promise<Response> {

        try {
            this.middleware.authorizeUser()
            this.middleware2.authorizeUser()
            return response.status(200).json("Hello World :)");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }
}