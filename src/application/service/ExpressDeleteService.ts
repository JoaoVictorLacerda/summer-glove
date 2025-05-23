import configureExpressService from "../util/configureExpressService";

export default function ExpressDeleteService(endpoint: string, constructorName: string,
                                             functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "DELETE", endpoint, functionValue, middleware)

}