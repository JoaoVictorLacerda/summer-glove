import configureExpressService from "../util/configureExpressService";

export default function ExpressGetService(endpoint: string, constructorName: string,
                                          functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "GET", endpoint, functionValue, middleware)


}