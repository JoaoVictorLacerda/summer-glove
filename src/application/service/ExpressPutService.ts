import configureExpressService from "../util/configureExpressService";

export default function ExpressPutService(endpoint: string, constructorName: string,
                                          functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "PUT", endpoint, functionValue, context, middleware)
}