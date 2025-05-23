import swaggerUi from "swagger-ui-express"
import buildObjectPath from "../../application/util/buildObjectPath";
import SwaggerInformationCore from "../../application/core/SwaggerInformationCore";
import ExpressInformationCore from "../../application/core/ExpressInformationCore";

export default function SwaggerInitializer(target: Function) {

    const swaggerConfig = SwaggerInformationCore.getInstance().getObjectConfig().swaggerConfig;
    const app = ExpressInformationCore.getInstance().getObjectConfig().mappedApi.app;

    configRoutes(swaggerConfig.paths)

    const swaggerSetup = swaggerUi.setup(swaggerConfig, SwaggerInformationCore.getInstance().getObjectConfig().theme?.getCss());

    app.use(SwaggerInformationCore.getInstance().getObjectConfig().swaggerEndpoint, swaggerUi.serve, swaggerSetup);


    SwaggerInformationCore.getInstance().cleanObjects()
    ExpressInformationCore.getInstance().cleanObjects()

}

function configRoutes(paths: any) {
    const mappedApi = SwaggerInformationCore.getInstance().getObjectConfig().mappedApi;
    const security = SwaggerInformationCore.getInstance().getObjectConfig().security;

    Object.keys(mappedApi).forEach((key: any) => {

        Object.keys(mappedApi[key]).forEach((key2: any) => {
            if (key2 !== "endpoint") {

                const endpoint = key2.split(" ")[0].toLowerCase();
                const controllerName = mappedApi[key].endpoint.replace("/", "-").toUpperCase();
                const statusRequest = mappedApi[key][key2].status
                const controller = mappedApi[key][key2];
                const doc = buildObjectPath(security, controllerName, statusRequest, controller);

                if (!paths[mappedApi[key].endpoint + key2.split(" ")[1]]) {
                    paths[mappedApi[key].endpoint + key2.split(" ")[1]] = {}
                }
                paths[mappedApi[key].endpoint + key2.split(" ")[1]][endpoint] = doc

            }
        })
    })
}