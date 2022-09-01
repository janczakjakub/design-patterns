import DiscountStrategyInterface from "./DiscountStrategyInterface";

export default class ProgressDiscountStrategy implements DiscountStrategyInterface {
    public calculate(price: number): number {
        if (price >= 100) {
            return price - price * 0.2;
        }

        if (price >= 150) {
            return price - price * 0.3;
        }

        if (price >= 200) {
            return price - price * 0.5;
        }

        return price;
    }
}
