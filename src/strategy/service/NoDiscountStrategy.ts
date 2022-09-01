import DiscountStrategyInterface from "./DiscountStrategyInterface";

export default class NoDiscountStrategy implements DiscountStrategyInterface {
    public calculate(price: number): number {
        return price;
    }
}
