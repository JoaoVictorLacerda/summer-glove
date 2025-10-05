import configureExpressService from "../util/configureExpressService";


export default function ExpressConnectService(endpoint: string, constructorName: string,
                                              functionValue: Function, context: any, ...middleware: any) {

    configureExpressService(constructorName, "CONNECT", endpoint, functionValue, context, middleware)
}