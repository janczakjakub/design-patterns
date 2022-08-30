import ShoemakerReceiver from "../Receiver/ShoemakerReceiver";
import CommandInterface from "./CommandInterface";

export default class OrderShoes implements CommandInterface {
    private receiver: ShoemakerReceiver;
    private name: string;

    constructor(receiver: ShoemakerReceiver, name: string) {
        this.receiver = receiver;
        this.name = name;
    }

    public execute(): void {
        this.receiver.makeShoes(this.name);
    }
}
