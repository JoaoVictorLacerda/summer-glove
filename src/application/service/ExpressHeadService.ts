import configureExpressService from "../util/configureExpressService";

export default function ExpressHeadService(endpoint: string, constructorName: string,
                                           functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "HEAD", endpoint, functionValue, middleware)

}