import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function Description(description: string) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig.info.description = description
    }
}