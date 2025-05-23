import initCore from "../../../application/util/initCoreUtil";
import ExpressConnectService from "../../../application/service/ExpressConnectService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Connect(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "CONNECT", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("CONNECT", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressConnectService, middleware)

    }
}
