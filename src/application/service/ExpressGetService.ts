import configureExpressService from "../util/configureExpressService";

export default function ExpressGetService(endpoint: string, constructorName: string,
                                          functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "GET", endpoint, functionValue, context, middleware)


}