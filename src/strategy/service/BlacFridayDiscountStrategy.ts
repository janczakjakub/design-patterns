import DiscountStrategyInterface from "./DiscountStrategyInterface";

export default class BlacFridayDiscountStrategy implements DiscountStrategyInterface {
    public calculate(price: number): number {
        return price * 0.5;
    }
}
