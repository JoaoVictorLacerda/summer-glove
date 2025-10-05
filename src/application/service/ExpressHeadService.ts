import configureExpressService from "../util/configureExpressService";

export default function ExpressHeadService(endpoint: string, constructorName: string,
                                           functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "HEAD", endpoint, functionValue, context, middleware)

}