import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function StatusResponse(status: number, description: string = "Default description") {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint;
        let statusObject: any = SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["status"];
        if (!statusObject) {
            statusObject = {}
            statusObject[status] = {description};
            SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["status"] = statusObject;
        } else {
            statusObject[status] = {description};
        }
    }
}