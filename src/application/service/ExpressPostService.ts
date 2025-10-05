import configureExpressService from "../util/configureExpressService";

export default function ExpressPostService(endpoint: string, constructorName: string,
                                           functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "POST", endpoint, functionValue, context, middleware)

}