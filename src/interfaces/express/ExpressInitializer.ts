import express, {json, Router} from "express";
import {printError, printInfo} from "../../application/util/loggerUtil";
import ExpressInformationCore from "../../application/core/ExpressInformationCore";
import {LoggerConfigTypes} from "../types/LoggerConfigTypes";
import LoggerInformationCore from "../../application/core/LoggerInformationCore";
import SwaggerInformationCore from "../../application/core/SwaggerInformationCore";
import DependenceInject from "../../application/core/DependenceInject";

type RouteConfig = {
    expressRoutes: any,
    method: string
}

type EndpointConfig = {
    endpoint: string,
    callback: any,
    middleware?: any
}

export default function ExpressInitializer(loggerConfigTypes: LoggerConfigTypes, ...appUse:any) {

    if (loggerConfigTypes !== undefined) {
        LoggerInformationCore.getInstance().getObjectConfig()["showLog"] = loggerConfigTypes === LoggerConfigTypes.SHOW
    }
    ExpressInformationCore.getInstance().getObjectConfig().appUse["config"] = appUse

    return function (target: any, propertyKey: string) {
        const rotes: any = ExpressInformationCore.getInstance().getObjectConfig().mappedApi;
        const configuration = ExpressInformationCore.getInstance().getObjectConfig().appUse
        const app = express();
        if((configuration && configuration.config) && configuration.config.length > 0) {
            configuration.config.map((item:any) => {
                app.use(item)
            })
        }else {
            app.use(json());
        }

        Object.keys(rotes).forEach((key: any) => {
            const expressRoutes = Router();
            const controllerName = key;

            Object.keys(rotes[key]).forEach(key2 => {
                try {
                    if (key2 !== "endpoint") {
                        const httpMethodAndRoute = key2.split(" ");
                        httpMethodAndRoute[1] = httpMethodAndRoute[1].replace(/{/g, ":").replace(/}/g, "");

                        const callback = rotes[key][key2].function;
                        const context = rotes[key][key2].context;
                        const middleware = rotes[key][key2].middleware;

                        const routeConfig: RouteConfig = {
                            expressRoutes: expressRoutes,
                            method: httpMethodAndRoute[0]
                        };

                        const endpointConfig: EndpointConfig = {
                            endpoint: httpMethodAndRoute[1],
                            callback: callback.bind(context),
                            middleware: middleware
                        };

                        configureRoutes(routeConfig, endpointConfig);
                        LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push({
                            message: `${rotes[key].endpoint}/${key2.replace(" ", "")} - mapped successfully`,
                            callback: printInfo})
                    }
                } catch (e) {
                    LoggerInformationCore.getInstance().getObjectConfig().loggersQueue.push({
                        message: `${rotes[key].endpoint}/${key2.replace(" ", "")} - mapped unsuccessfully`,
                        error: e,
                        callback: printError})

                }
            });

            const finalUrl = rotes[controllerName].endpoint;
            app.use(finalUrl, expressRoutes);
        });

        rotes["app"] = app;
        target[propertyKey] = app;
        LoggerInformationCore.getInstance().showLogs()

        LoggerInformationCore.getInstance().cleanObjects();
        DependenceInject.getInstance().cleanObjects();
    };

}

function configureRoutes(routeConfig: RouteConfig, endpointConfig: EndpointConfig) {
    return routeConfig.expressRoutes[routeConfig.method.toLowerCase()](endpointConfig.endpoint, endpointConfig.middleware, endpointConfig.callback);
}