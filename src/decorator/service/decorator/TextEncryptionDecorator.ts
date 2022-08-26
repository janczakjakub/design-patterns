import * as crypto from "crypto";

import TextFileDataSource from "../dataSouce/TextFileDataSource";
import TextFileDataSourceInterface from "../dataSouce/TextFileDataSourceInterface";

export default class TextEncryptionDecorator implements TextFileDataSourceInterface {
    private textDatafile: TextFileDataSource;
    private algorithm: string;
    private key: Buffer;
    private iv: Buffer;

    constructor(textDatafile: TextFileDataSource) {
        this.textDatafile = textDatafile;
        this.algorithm = "aes-256-ctr";
        this.key = crypto.randomBytes(32);
        this.iv = crypto.randomBytes(16);
    }

    public writeData(data: string): void {
        const cipher = crypto.createCipheriv(this.algorithm, Buffer.from(this.key), this.iv);
        const encrypted = Buffer.concat([cipher.update(data), cipher.final()]);

        this.textDatafile.writeData(encrypted.toString("hex"));
    }
    public readData(): string {
        const encryptedText: Buffer = Buffer.from(this.textDatafile.readData(), "hex");
        const decipher = crypto.createDecipheriv(this.algorithm, Buffer.from(this.key), this.iv);
        const decrypted = Buffer.concat([decipher.update(encryptedText), decipher.final()]);

        return decrypted.toString();
    }
}
