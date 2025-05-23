import { Request, Response } from "express";
import {
    Controller,
    Body,
    StatusResponse,
    Post,
} from "../src/index";


@Controller("/summer-glove")
export default class MyController {

    @StatusResponse(200)
    @StatusResponse(400)
    @Body({email:"string", password:"string"})
    @Post()
    public async Hello(request: Request, response: Response): Promise<Response> {

        try {
            return response.status(200).json("Hello World :)");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }
}