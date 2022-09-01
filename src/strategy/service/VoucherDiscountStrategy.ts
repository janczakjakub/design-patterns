import DiscountStrategyInterface from "./DiscountStrategyInterface";

export default class VoucherDiscountStrategy implements DiscountStrategyInterface {
    public calculate(price: number): number {
        let discount: number = price - 20;

        return discount < 0 ? 0 : discount;
    }
}
