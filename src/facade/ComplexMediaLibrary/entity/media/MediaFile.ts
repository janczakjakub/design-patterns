export default class MediaFile {
    private name: string;
    private type: string;

    constructor(name: string, type: string) {
        this.name = name;
        this.type = type;
    }

    public getType(): string {
        return this.type;
    }

    public getFileName(): string {
        return `${this.name}.${this.type}`;
    }
}
