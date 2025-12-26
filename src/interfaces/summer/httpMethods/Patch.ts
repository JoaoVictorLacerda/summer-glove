import initCore from "../../../application/util/initCoreUtil";
import ExpressPatchService from "../../../application/service/ExpressPatchService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Patch(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "PATCH", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("PATCH", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, new target.constructor(), descriptor, ExpressPatchService, middleware)

    }
}
