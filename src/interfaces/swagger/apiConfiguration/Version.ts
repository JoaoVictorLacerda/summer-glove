import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function Version(version: string) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig.info.version = version
    }
}