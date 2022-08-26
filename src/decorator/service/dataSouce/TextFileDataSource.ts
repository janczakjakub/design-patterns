import * as fs from "fs";
import * as path from "path";
import TextFileDataSourceInterface from "./TextFileDataSourceInterface";

export default class TextFileDataSource implements TextFileDataSourceInterface {
    private fileName: string;

    constructor(fileName: string) {
        this.fileName = fileName;
    }

    public readData(): string {
        try {
            const text: string = fs.readFileSync(
                path.join(__dirname, "..", "..", "..", "..", "data", this.fileName),
                { encoding: "utf-8" }
            );

            return text;
        } catch (error) {
            console.log(error);
            return "";
        }
    }

    public writeData(data: string): void {
        try {
            fs.writeFileSync(
                path.join(__dirname, "..", "..", "..", "..", "data", this.fileName),
                data,
                { flag: "w+" }
            );
        } catch (error) {
            console.log(error);
        }
    }
}
