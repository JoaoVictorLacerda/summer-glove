import SwaggerInformationCore from "../../application/core/SwaggerInformationCore";

export const AuthType = {
    BEARER_JWT: () => {
        SwaggerInformationCore.getInstance().setSecurity({
            Bearer: []
        })
        return {
            Bearer: {
                type: "apiKey",
                name: "Authorization",
                in: "header",
                description: ">- Place the `Bearer` prefix before placing the token"
            }
        }
    },
    BASIC: () => {
        SwaggerInformationCore.getInstance().setSecurity({
            basicAuth: []
        })
        return {
            basicAuth: {
                type: "basic"
            }
        }
    }
}