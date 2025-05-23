import initCore from "../../../application/util/initCoreUtil";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import ExpressHeadService from "../../../application/service/ExpressHeadService";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Head(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "HEAD", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("HEAD", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, target, descriptor, ExpressHeadService, middleware)

    }
}
