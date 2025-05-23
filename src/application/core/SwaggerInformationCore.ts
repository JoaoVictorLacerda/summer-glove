import {ThemeInterface} from "../../interfaces/swagger/themes/ThemeInterface";
import Core from "./Core";

export default class SwaggerInformationCore implements Core {
    private constructor() {
    }

    private static instance: SwaggerInformationCore;

    public static getInstance() {

        if (!SwaggerInformationCore.instance) {
            SwaggerInformationCore.instance = new SwaggerInformationCore();
        }
        return SwaggerInformationCore.instance;
    }


    private mappedApi: any = {};
    private security: any = {};
    private theme: ThemeInterface = undefined;
    private swaggerConfig: any = {
        swagger: "2.0",
        info: {
            title: "Default-API",
            description: "this is auto generated documentation with lib {{lib}}",
            version: "1.0.0"
        },
        basePath: "/",
        securityDefinitions: {},
        paths: {}
    };
    private swaggerEndpoint = "/"

    public setTheme(theme: ThemeInterface) {
        this.theme = theme;
    }

    public setSwaggerEndpoint(swaggerEndpoint: string) {
        this.swaggerEndpoint = swaggerEndpoint;
    }

    public setSecurity(newSecurity: any) {
        this.security = newSecurity
    }

    cleanObjects(): void {
        this.mappedApi = {}
        this.swaggerConfig = {}
        this.swaggerEndpoint = undefined
        this.theme = undefined
        this.security = {}
    }

    getObjectConfig(): any {
        return {
            mappedApi: this.mappedApi,
            theme: this.theme,
            swaggerConfig: this.swaggerConfig,
            swaggerEndpoint: this.swaggerEndpoint,
            security: this.security
        }
    }
}