import initCore from "../../../application/util/initCoreUtil";
import ExpressDeleteService from "../../../application/service/ExpressDeleteService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Delete(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "DELETE", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("DELETE", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressDeleteService, middleware)
    }
}
