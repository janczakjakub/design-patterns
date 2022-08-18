import * as lib from "../index";

const defaultConfiguration = new lib.prototype.Configuration();
const clonedDefaultConfiguration = defaultConfiguration.clone();

const productionConfiguration = defaultConfiguration.clone();
productionConfiguration.environmentName = "production";
productionConfiguration.createdDate = new Date();
productionConfiguration.protocol = "https";
productionConfiguration.port = 80;

const stageConfiguration = defaultConfiguration.clone();
stageConfiguration.environmentName = "stage";
stageConfiguration.createdDate = new Date();
stageConfiguration.showConfiguration = function (): void {
    console.log(`Configuration env: ${this.environmentName}\nNew function implemented ;)\n `);
};

defaultConfiguration.showConfiguration();
console.log("------\n");
clonedDefaultConfiguration.showConfiguration();
console.log("------\n");
productionConfiguration.showConfiguration();
console.log("------\n");
stageConfiguration.showConfiguration();

console.log("compare configuration default and clonned\n");
compareConfiguration(defaultConfiguration, clonedDefaultConfiguration);

console.log("compare configuration default and production\n");
compareConfiguration(defaultConfiguration, productionConfiguration);

console.log("compare configuration default and stage\n");
compareConfiguration(defaultConfiguration, stageConfiguration);

function compareConfiguration(
    configuration1: lib.prototype.Configuration,
    configuration2: lib.prototype.Configuration
): void {
    if (configuration1.environmentName === configuration2.environmentName) {
        console.log("enviroment has the same value and type");
    } else {
        console.log("environment is different");
    }

    if (configuration1.createdDate === configuration2.createdDate) {
        console.log("createdDate is the same object");
    } else {
        console.log("createdDate is different");
    }

    if (configuration1.protocol === configuration2.protocol) {
        console.log("protocol has the same value and type");
    } else {
        console.log("protocol is different");
    }

    if (configuration1.hostName === configuration2.hostName) {
        console.log("hostName has the same value and type");
    } else {
        console.log("hostName is different");
    }

    if (configuration1.port === configuration2.port) {
        console.log("port has the same value and type");
    } else {
        console.log("port is different");
    }

    if (configuration1.path === configuration2.path) {
        console.log("path has the same value and type");
    } else {
        console.log("path is different");
    }

    if (configuration1.showConfiguration === configuration2.showConfiguration) {
        console.log("showConfiguration is the same function\n");
    } else {
        console.log("showConfiguration is different");
    }
}
