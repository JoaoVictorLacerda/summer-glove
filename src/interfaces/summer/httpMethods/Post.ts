import initCore from "../../../application/util/initCoreUtil";
import ExpressPostService from "../../../application/service/ExpressPostService";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Post(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "POST", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("POST", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, new target.constructor(), descriptor, ExpressPostService, middleware)
    }
}