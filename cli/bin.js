#!/usr/bin/env node

const args = process.argv.slice(2);
const command = args[0];

if (command === "--create-app") {
    createApp();
} else if (command === "--author") {
    console.log("João Victor Lacerda de Queiroz");
}

function createApp() {
    const { execSync } = require('child_process');
    const fs = require("fs");

    execSync('npm install express@5.1.0');
    execSync('npm install -D @types/express@4.17.14');
    execSync('npm install -D typescript@4.9.4');
    execSync('npm install -D ts-node-dev@2.0.0');

    const path = require("path");
    const projectPath = process.cwd();
    const appPath = path.join(projectPath, "App.ts");
    const controllerPath = path.join(projectPath, "Controller.ts");
    const serverPath = path.join(projectPath, "Server.ts");
    const tsconfigPath = path.join(projectPath, "tsconfig.json");

    fs.writeFileSync(appPath, `
import Express from "express";
import {
    ApiDefaultPath,
    Description,
    ExpressInitializer,
    GlobalAuth,
    AuthType,
    LoggerConfigTypes,
    SwaggerEndpoint,
    SwaggerInitializer,
    Theme,
    ThemesType,
    Title,
    Version
} from "summer-glove";
import MyController from "./Controller";
import express from "express";

@SwaggerInitializer
@SwaggerEndpoint("/doc")
@Description("API TEST")
@Title("TEST NAME")
@Version("1.0.0")
@ApiDefaultPath("/")
@GlobalAuth(AuthType.BEARER_JWT)
@Theme(ThemesType.NEWS_PAPER)
export default class App {

    @ExpressInitializer(LoggerConfigTypes.SHOW)
    private app: Express.Express = express();

    constructor () {
        this.initControllers();
    }

    private initControllers(){
        new MyController()
    }

    public getApp(): Express.Express {
        return this.app;
    }
}`);

    fs.writeFileSync(controllerPath, `
import { Request, Response } from "express";
import {
    Controller,
    Body,
    StatusResponse,
    Post,
} from "summer-glove";


@Controller("/summer-glove")
export default class MyController {

    @StatusResponse(200)
    @StatusResponse(400)
    @Body({email:"string", password:"string"})
    @Post()
    public async Hello(request: Request, response: Response): Promise<Response> {

        try {
            return response.status(200).json("Hello World :)");
        } catch (error: any) {
            return response.status(400).json(error.message);
        }

    }
}
    `);

    fs.writeFileSync(serverPath, `
import { Express } from "express";
import App from "./App";

class Server {

    private server: Express;

    constructor (){
        const app = new App();
        this.server = app.getApp();
    }
    public async startServer():Promise<void> {
        this.server.listen(5000, ()=>{console.log("OK")});
    }

}

new Server().startServer();
    `);

    fs.writeFileSync(tsconfigPath, `
{
  "compilerOptions": {
    "experimentalDecorators": true,
    "emitDecoratorMetadata": true,
    "resolveJsonModule": true,
    "incremental": true,
    "target": "ES2020",
    "module": "CommonJS",
    "outDir": "./dist",
    "strict": true,
    "declaration": true,
    "esModuleInterop": true,
    "strictPropertyInitialization": false,
    "typeRoots": ["./node_modules/@types",  "../node_modules/@types"],
    "types": ["node", "jest"],
    "strictNullChecks": false,
    "skipLibCheck": true,                           /* Skip type checking of declaration files. */
    "useUnknownInCatchVariables": false
  },
  "include": [
    "src/**/*"
  ],
  "exclude": [
    "node_modules"
  ]

}
    `);
    console.log("ok");
}
