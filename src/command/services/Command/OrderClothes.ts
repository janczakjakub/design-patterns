import TailorReceiver from "../Receiver/TailorReceiver";
import CommandInterface from "./CommandInterface";

export default class OrderClothes implements CommandInterface {
    private receiver: TailorReceiver;
    private itemName: string;
    private name: string;

    constructor(receiver: TailorReceiver, itemName: string, name: string) {
        this.receiver = receiver;
        this.itemName = itemName;
        this.name = name;
    }

    public execute(): void {
        switch (this.itemName) {
            case "dress":
                this.receiver.makeDress(this.name);
                break;
            case "tshirt":
                this.receiver.makeTShirt(this.name);
                break;
            case "pants":
                this.receiver.makePants(this.name);
                break;
            default:
                console.log("Can't execute this command");
        }
    }
}
