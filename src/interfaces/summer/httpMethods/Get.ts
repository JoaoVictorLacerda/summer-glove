import initCore from "../../../application/util/initCoreUtil";
import ExpressGetService from "../../../application/service/ExpressGetService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Get(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "GET", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("GET", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressGetService, middleware)

    }
}