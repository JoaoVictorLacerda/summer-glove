import initCore from "../../../application/util/initCoreUtil";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import ExpressOptionsService from "../../../application/service/ExpressOptionsService";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Options(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "OPTIONS", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("OPTIONS", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressOptionsService, middleware)

    }
}
