import OrderClothes from "./services/Command/OrderClothes";
import OrderShoes from "./services/Command/OrderShoes";
import ClothesInvoker from "./services/Invoker/ClothesInvoker";
import ShoemakerReceiver from "./services/Receiver/ShoemakerReceiver";
import TailorReceiver from "./services/Receiver/TailorReceiver";

export default class Client {
    private invoker: ClothesInvoker;
    private tailorReceiver: TailorReceiver;
    private shoeRevceiver: ShoemakerReceiver;

    constructor(
        invoker: ClothesInvoker,
        tailorReceiver: TailorReceiver,
        shoeRevceiver: ShoemakerReceiver
    ) {
        this.invoker = invoker;
        this.tailorReceiver = tailorReceiver;
        this.shoeRevceiver = shoeRevceiver;
    }

    makeOrder(name: string, itemName: string): void {
        if (itemName === "shoes") {
            const orderShoes = new OrderShoes(this.shoeRevceiver, name);
            this.invoker.takeShoesOrder(orderShoes);
        } else {
            const orderClothes = new OrderClothes(this.tailorReceiver, itemName, name);
            this.invoker.takeClothesOrder(orderClothes);
        }
    }
}
