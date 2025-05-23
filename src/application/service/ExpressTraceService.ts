import configureExpressService from "../util/configureExpressService";

export default function ExpressTraceService(endpoint: string, constructorName: string,
                                            functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "TRACE", endpoint, functionValue, middleware)
}