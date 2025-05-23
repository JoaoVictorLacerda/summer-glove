import configureExpressService from "../util/configureExpressService";

export default function ExpressPutService(endpoint: string, constructorName: string,
                                          functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "PUT", endpoint, functionValue, middleware)
}