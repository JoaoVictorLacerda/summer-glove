import SwaggerInformationCore from "../core/SwaggerInformationCore";

export default function configureDescriptorAndSwaggerEndpoint(
    httpMethod: string,
    constructorName: string,
    endpoint: string,
    descriptor: PropertyDescriptor
    ) {

    const finalEndpoint = `${httpMethod} ` + endpoint
    descriptor.value.endpoint = finalEndpoint
    SwaggerInformationCore.getInstance().getObjectConfig().mappedApi[constructorName][finalEndpoint] = {}

}