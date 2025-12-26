import {Request, response, Response} from "express";
import {
    Controller,
    Body,
    StatusResponse,
    Post,
    Injectable
} from "../src/index";
import {Patch} from "../src";


@Controller("/summer-glove")
export default class MyController {


    @StatusResponse(200)
    @StatusResponse(400)
    @Body({email:"string", password:"string"})
    @Patch("/")
    public async Hello(request: Request, response: Response): Promise<Response> {

        try {
            return response.status(200).json("Hello World :)");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }
}