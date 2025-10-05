import Middleware from "../../../../dev/Middleware";
import DependenceInject from "../../../application/core/DependenceInject";
import LoggerInformationCore from "../../../application/core/LoggerInformationCore";
import {printWarn} from "../../../application/util/loggerUtil";

export default function Injectable(objectName?: string) {

    return function (target: any, propertyKey: string) {
        const key = objectName || propertyKey
        const object = DependenceInject.getInstance().getObjectConfig().objects[key.toUpperCase()];
        if(!object){
            LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push({
                message: `The propertyKey [${propertyKey}] was not injected. The key [${propertyKey}] you entered did not match the instantiated key`,
                callback: printWarn})
        }
        target[propertyKey] = DependenceInject.getInstance().getObjectConfig().objects[key.toUpperCase()]
    }
}
