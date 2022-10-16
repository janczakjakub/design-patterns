const http = require("http");

import { resolve } from "path";
import DownloadInterface from "./DownloadInterface";

export default class Downloader implements DownloadInterface {
    public async download(url: string): Promise<void> {
        await this.makeGetRequest(url);
        await this.saveFile();
        console.log("End of process.");
    }

    private makeGetRequest(url: string): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log("File downloading in progress...");
            setTimeout(() => {
                console.log("File downloaded.");
                resolve();
            }, this.getRandomInt(1000));
        });
    }

    private saveFile(): Promise<void> {
        return new Promise((resolve, reject) => {
            console.log("File saving in progress...");
            setTimeout(() => {
                console.log("File saved.");
                resolve();
            }, this.getRandomInt(1000));
        });
    }

    private getRandomInt(max: number): number {
        return Math.floor(Math.random() * max);
    }
}
