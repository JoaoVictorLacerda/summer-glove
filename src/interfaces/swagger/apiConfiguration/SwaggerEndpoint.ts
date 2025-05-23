import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function SwaggerEndpoint(swaggerEndpoint: string) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().setSwaggerEndpoint(swaggerEndpoint)
    }
}