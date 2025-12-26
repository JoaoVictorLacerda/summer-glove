import initCore from "../../../application/util/initCoreUtil";
import configureExpressMethod from "../../../application/util/configureExpressMethod";
import ExpressTraceService from "../../../application/service/ExpressTraceService";
import configureDescriptorAndSwaggerEndpoint from "../../../application/util/configureDescriptorAndSwaggerEndpoint";
import verifyRouteConflicts from "../../../application/util/verifyRouteConflicts";

export default function Trace(endpoint: string = "/", ...middleware: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {

        initCore(target.constructor.name)
        verifyRouteConflicts(endpoint, "TRACE", target.constructor.name)
        configureDescriptorAndSwaggerEndpoint("TRACE", target.constructor.name, endpoint, descriptor)
        configureExpressMethod(endpoint, new target.constructor(), descriptor, ExpressTraceService, middleware)

    }
}
