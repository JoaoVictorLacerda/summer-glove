#!/usr/bin/env node

const path = require("path");

const args = process.argv.slice(2);
const command = args[0];

if (command === "--create-app") {
    require(path.join(__dirname, "./commands/create-app.js"));
} else if (command === "--author") {
    console.log("João Victor Lacerda de Queiroz");
}