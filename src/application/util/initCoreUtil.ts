import SwaggerInformationCore from "../core/SwaggerInformationCore";
import ExpressInformationCore from "../core/ExpressInformationCore";

export default function initCore(constructorName: string) {

    const swaggerInformation = SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[constructorName];
    const expressInformation = ExpressInformationCore.getInstance().getObjectConfig().mappedApi[constructorName];

    if (!expressInformation) {
        ExpressInformationCore.getInstance().getObjectConfig().mappedApi[constructorName] = {}
    }
    if (!swaggerInformation) {
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[constructorName] = {};
    }
}