import {printWarn} from "./loggerUtil";
import ExpressInformationCore from "../core/ExpressInformationCore";
import LoggerInformationCore from "../core/LoggerInformationCore";

export default function verifyRouteConflicts(endpoint: string, httpMethod:string, constructorName: string) {
    const route = ExpressInformationCore.getInstance().getObjectConfig().mappedApi[constructorName][`${httpMethod} ` + endpoint]
    if (route) {
        LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push({
            message: `The endpoint ${constructorName} - ${httpMethod}${endpoint} is duplicated.`,
            callback: printWarn})
    }
}