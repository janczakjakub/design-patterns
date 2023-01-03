export default class JsonInterpreter {
    public convertJsonToYml(jsonObj: object): string {
        return this.getStringFromJson(jsonObj, 0);
    }

    private getStringFromJson(jsonObj: object, nestedLevel: number): string {
        let text: string = "";
        for (const [key, value] of Object.entries(jsonObj)) {
            if (this.isSimleValue(value)) {
                text += this.getStringFromSimpleValue(key, value, nestedLevel);
            } else {
                if (this.isObject(value)) {
                    text += `${this.getKeyString(key, nestedLevel)}:\n`;
                    text += `${this.getStringFromJson(value, nestedLevel + 1)}`;
                } else {
                    text += `${this.getKeyString(key, nestedLevel)}:\n`;
                    text += this.getStringFromArray(value, nestedLevel + 1);
                }
            }
        }

        return text;
    }

    private getStringFromArray(arr: unknown[], nestedLevel: number): string {
        let text: string = "";

        for (const element of arr) {
            if (this.isSimleValue(element)) {
                text += `${this.addSpaceToString(nestedLevel)} - ${element}\n`;
            } else {
                text += `${this.addSpaceToString(nestedLevel)} -${this.getStringFromJson(
                    element as object,
                    nestedLevel
                )}`;
            }
        }

        return text;
    }

    private getStringFromSimpleValue(
        key: string,
        value: boolean | number | string | null,
        nestedLevel: number
    ): string {
        return `${this.getKeyString(key, nestedLevel)}: ${value}\n`;
    }

    private getKeyString(key: string, nestedLevel: number): string {
        return `${this.addSpaceToString(nestedLevel)}${key}`;
    }

    private addSpaceToString(level: number): string {
        let textWithSpace = "";
        for (let i = 0; i < level; i++) {
            textWithSpace += " ";
        }

        return textWithSpace;
    }

    private isSimleValue(value: unknown): boolean {
        const allowedValue = ["boolean", "number", "string", "null"];

        return allowedValue.includes(typeof value) || value === null;
    }

    private isObject(value: unknown): boolean {
        return typeof value === "object" && !Array.isArray(value) && value !== null;
    }
}
