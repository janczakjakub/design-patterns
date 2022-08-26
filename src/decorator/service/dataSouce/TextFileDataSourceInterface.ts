export default interface TextFileDataSourceInterface {
    writeData(data: string): void;
    readData(): string;
}
