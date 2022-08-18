import CloneableInterface from "./CloneableInterface";

export default class Configuration implements CloneableInterface {
    public environmentName: string;
    public createdDate: Date;
    public hostName: string;
    public port: number;
    public protocol: string;
    public path: string;

    constructor() {
        this.environmentName = "default_configuration";
        this.createdDate = new Date();
        this.protocol = "http";
        this.hostName = "example.com";
        this.port = 5000;
        this.path = "index.js";
    }

    public clone(): this {
        const clone = Object.create(this);

        return clone;
    }

    public showConfiguration(): void {
        console.log(`Configuration env: ${this.environmentName}\ncreated date is ${this.createdDate}\nURL is ${this.protocol}://${this.hostName}:${this.port}/${this.path}
        `);
    }
}
