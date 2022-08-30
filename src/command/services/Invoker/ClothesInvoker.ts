import OrderClothes from "../Command/OrderClothes";
import OrderShoes from "../Command/OrderShoes";

export default class ClothesInvoker {
    public takeClothesOrder(orderClothes: OrderClothes): void {
        orderClothes.execute();
    }

    public takeShoesOrder(orderShoes: OrderShoes): void {
        orderShoes.execute();
    }
}
