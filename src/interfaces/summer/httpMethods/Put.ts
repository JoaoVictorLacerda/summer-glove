import initCore from "../../../application/util/initCoreUtil";
import ExpressPutService from "../../../application/service/ExpressPutService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Put(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "PUT", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("PUT", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressPutService, middleware)

    }
}
