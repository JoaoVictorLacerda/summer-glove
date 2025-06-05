import Core from "./Core";

export default class ExpressInformationCore implements Core {
    private constructor() {
    }

    private static instance: ExpressInformationCore;

    public static getInstance() {

        if (!ExpressInformationCore.instance) {
            ExpressInformationCore.instance = new ExpressInformationCore();
        }
        return ExpressInformationCore.instance;
    }

    private mappedApi: any = {}
    private controllers: any = {}
    private appUse: any = {}

    public getObjectConfig(): any {
        return {
            mappedApi: this.mappedApi,
            controllers: this.controllers,
            appUse: this.appUse
        };
    }

    cleanObjects(): void {
        this.mappedApi = {}
        this.appUse = {}
        this.controllers = {}
    }

}