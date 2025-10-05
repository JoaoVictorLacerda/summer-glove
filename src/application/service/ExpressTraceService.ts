import configureExpressService from "../util/configureExpressService";

export default function ExpressTraceService(endpoint: string, constructorName: string,
                                            functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "TRACE", endpoint, functionValue, context, middleware)
}