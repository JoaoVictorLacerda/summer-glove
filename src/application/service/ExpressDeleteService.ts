import configureExpressService from "../util/configureExpressService";

export default function ExpressDeleteService(endpoint: string, constructorName: string,
                                             functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "DELETE", endpoint, functionValue, context, middleware)

}