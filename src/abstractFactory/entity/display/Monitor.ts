import DisplayInterface from "./DisplayInterface";

export default class Monitor implements DisplayInterface {
    public getDisplay(): string {
        return "iiyama prolite";
    }
}
