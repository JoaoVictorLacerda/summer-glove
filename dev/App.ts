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
import StartControllers from "../src/interfaces/summer/ecosystem/StartControllers";
@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("API TEST")
@Title("TEST NAME")
@Version("1.0.0")
@ApiDefaultPath("/")
@GlobalAuth(AuthType.BEARER_JWT)
@Theme(ThemesType.NEWS_PAPER)
@StartControllers(
    MyController
)
export default class App {

    @ExpressInitializer(LoggerConfigTypes.SHOW,
        json()
    )
    private app: Express.Express;


    public getApp(): Express.Express {
        return this.app;
    }
}