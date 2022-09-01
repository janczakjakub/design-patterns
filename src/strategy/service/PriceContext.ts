import BlacFridayDiscountStrategy from "./BlacFridayDiscountStrategy";
import DiscountStrategyInterface from "./DiscountStrategyInterface";
import NoDiscountStrategy from "./NoDiscountStrategy";
import ProgressDiscountStrategy from "./ProgressDiscountStrategy";
import { StrategyName } from "./StrategyEnum";
import VoucherDiscountStrategy from "./VoucherDiscountStrategy";

export default class PriceContext {
    private strategy: DiscountStrategyInterface;

    // constructor(strategy: DiscountStrategyInterface) {
    //     this.strategy = strategy;
    // }

    public setStrategy(strategyName: StrategyName) {
        switch (strategyName) {
            case StrategyName.blacFiday:
                this.strategy = new BlacFridayDiscountStrategy();
                break;
            case StrategyName.noDiscount:
                this.strategy = new NoDiscountStrategy();
                break;
            case StrategyName.progressDiscount:
                this.strategy = new ProgressDiscountStrategy();
                break;
            case StrategyName.voucher:
                this.strategy = new VoucherDiscountStrategy();
                break;
            default:
                this.strategy = new NoDiscountStrategy();
        }
    }

    public getPriceAfterDiscount(price: number): number {
        return this.strategy.calculate(price);
    }
}
