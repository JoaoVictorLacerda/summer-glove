import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function Title(title: string) {

    return (target: Function) => {
        SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig.info.title = title
    }
}