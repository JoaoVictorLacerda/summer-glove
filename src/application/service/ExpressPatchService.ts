import configureExpressService from "../util/configureExpressService";

export default function ExpressPatchService(endpoint: string, constructorName: string,
                                            functionValue: Function, ...middleware: any) {

    configureExpressService(constructorName, "PATCH", endpoint, functionValue, middleware)

}