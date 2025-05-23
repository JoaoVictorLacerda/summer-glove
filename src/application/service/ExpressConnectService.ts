import configureExpressService from "../util/configureExpressService";


export default function ExpressConnectService(endpoint: string, constructorName: string,
                                              functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "CONNECT", endpoint, functionValue, middleware)
}