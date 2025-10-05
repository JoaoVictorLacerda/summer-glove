import configureExpressService from "../util/configureExpressService";

export default function ExpressOptionsService(endpoint: string, constructorName: string,
                                              functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "OPTIONS", endpoint, functionValue, context, middleware)
}