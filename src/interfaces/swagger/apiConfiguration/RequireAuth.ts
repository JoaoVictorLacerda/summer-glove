import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function RequireAuth() {

    return (target: any, propertyKey: string, descriptor: PropertyDescriptor) => {
        const endpoint = descriptor.value.endpoint
        SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[target.constructor.name][endpoint]["security"] = 1
    }
}