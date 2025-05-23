import configureExpressService from "../util/configureExpressService";

export default function ExpressOptionsService(endpoint: string, constructorName: string,
                                              functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "OPTIONS", endpoint, functionValue, middleware)
}