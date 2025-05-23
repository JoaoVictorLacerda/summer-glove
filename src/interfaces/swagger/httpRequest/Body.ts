import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function Body(body: any) {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["body"] = body
    }
}