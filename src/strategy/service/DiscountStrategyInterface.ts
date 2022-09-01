export default interface DiscountStrategyInterface {
    calculate(price: number): number;
}
