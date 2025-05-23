import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function ApiDefaultPath(basePath: string) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig.basePath = basePath
    }
}