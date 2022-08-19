import SenderInterface from "./SenderInterface";

export default class SenderMessage implements SenderInterface {
    public send(tittle: string, message: string): void {
        console.log(tittle.toUpperCase() + " " + message);
    }
}
