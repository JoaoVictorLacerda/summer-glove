import Core from "./Core";

export default class LoggerInformationCore implements Core {
    private constructor() {
    }

    private static instance: LoggerInformationCore;

    public static getInstance() {

        if (!LoggerInformationCore.instance) {
            LoggerInformationCore.instance = new LoggerInformationCore();
        }
        return LoggerInformationCore.instance;
    }

    private logger: any = {
        showLog: true,
        loggersQueue: []
    }

    public getObjectConfig(): any {
        return this.logger;
    }

    public cleanObjects(): void {
        this.logger = {}
    }

    public showLogs(): void {
        if (this.logger.showLog) {
            this.logger.loggersQueue.forEach((item: any) => {
                if (item.error) {
                    item.callback(item.message, item.error)
                } else {
                    item.callback(item.message)
                }
            })
        }
    }
}