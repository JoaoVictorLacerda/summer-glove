import Express, {json} from "express";
import {
    ApiDefaultPath,
    Description,
    ExpressInitializer,
    GlobalAuth,
    AuthType,
    LoggerConfigTypes,
    SwaggerEndpoint,
    SwaggerInitializer,
    Theme,
    ThemesType,
    Title,
    Version
} from "../src/index";
import MyController from "./Controller";
@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("API TEST")
@Title("TEST NAME")
@Version("1.0.0")
@ApiDefaultPath("/")
@GlobalAuth(AuthType.BEARER_JWT)
@Theme(ThemesType.NEWS_PAPER)
export default class App {

    @ExpressInitializer(LoggerConfigTypes.SHOW,
        json()
    )
    private app: Express.Express;

    constructor () {
        this.initControllers();
    }
    private initControllers(){
        new MyController()
    }

    public getApp(): Express.Express {
        return this.app;
    }
}