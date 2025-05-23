import SwaggerInformationCore from "../../../application/core/SwaggerInformationCore";

export default function GlobalAuth(auth: Function) {

    return (target: Function) => {

        SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig.securityDefinitions = auth()
    }
}