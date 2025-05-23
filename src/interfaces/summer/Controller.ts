import ExpressInformationCore from "../../application/core/ExpressInformationCore";
import SwaggerInformationCore from "../../application/core/SwaggerInformationCore";
import initCore from "../../application/util/initCoreUtil";
import verifyControllerConflicts from "../../application/util/verifyControllerConflicts";

export default function Controller(controller: string) {

    return (target: Function) => {
        verifyControllerConflicts(controller)
        initCore(target.name)
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.name]["endpoint"] = controller
        ExpressInformationCore.getInstance().getObjectConfig().controllers[controller] = 1
        ExpressInformationCore.getInstance().getObjectConfig().mappedApi[target.name]["endpoint"] = controller
    }
}
