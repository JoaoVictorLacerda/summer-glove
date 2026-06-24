import {Request, Response} from "express";
import {Controller, FormDataTypes, StatusResponse} from "../src/index";
import {Patch} from "../src";
import FormDataV2 from "../src/interfaces/swagger/httpRequest/FormDataV2";
import multer from "multer";

const photo = multer()

@Controller("/summer-glove")
export default class MyController {


    @StatusResponse(200)
    @StatusResponse(400)
    @FormDataV2({
        dev: {
            type: FormDataTypes.STRING,
            example: 1212
        },
        img: {
            type: FormDataTypes.FILE,
        }
    })

    @Patch("/", photo.single("img"))
    public async Hello(request: Request, response: Response): Promise<Response> {
        try {
            const {dev} = request.body;
            return response.status(200).json("Hello World :)");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }
}