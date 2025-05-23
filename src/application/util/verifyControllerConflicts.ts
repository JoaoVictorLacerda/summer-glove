import ExpressInformationCore from "../core/ExpressInformationCore";
import {printWarn} from "./loggerUtil";
import LoggerInformationCore from "../core/LoggerInformationCore";

export default function verifyControllerConflicts(controllerName: string) {
    const controllerPath = ExpressInformationCore.getInstance().getObjectConfig().controllers[controllerName]
    if (controllerPath) {
        LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push({
            message: `The controller ${controllerName} has already been mapped.`,
            callback: printWarn})
    }
}