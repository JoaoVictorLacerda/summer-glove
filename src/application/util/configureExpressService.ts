import ExpressInformationCore from "../core/ExpressInformationCore";

export default function configureExpressService(className: string, method: any, endpoint: string, functionValue: any, context: any, ...middleware: any) {
    ExpressInformationCore.getInstance().getObjectConfig().mappedApi[className][`${method} ` + endpoint] = {}
    ExpressInformationCore.getInstance().getObjectConfig().mappedApi[className][`${method} ` + endpoint]["function"] = functionValue
    ExpressInformationCore.getInstance().getObjectConfig().mappedApi[className][`${method} ` + endpoint]["middleware"] = middleware
    ExpressInformationCore.getInstance().getObjectConfig().mappedApi[className][`${method} ` + endpoint]["context"] = context
}