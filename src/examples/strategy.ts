import * as lib from "../index";

function clientCode(strategy: lib.strategy.StrategyName, orginalPrice: number): void {
    const priceService = new lib.strategy.PriceContext();
    console.log(`Strategy name is ${strategy}`);
    priceService.setStrategy(strategy);
    const priceAfterDiscount: number = priceService.getPriceAfterDiscount(orginalPrice);
    console.log(`Price after discount is ${priceAfterDiscount}\n`);
}

let price = 10;

console.log("----------------------------------\n");
clientCode(lib.strategy.StrategyName.noDiscount, price);
console.log("----------------------------------\n\n");
clientCode(lib.strategy.StrategyName.blacFiday, price);
console.log("----------------------------------\n\n");
clientCode(lib.strategy.StrategyName.progressDiscount, price);
console.log("----------------------------------\n\n");
price = 100;
clientCode(lib.strategy.StrategyName.progressDiscount, price);
console.log("----------------------------------\n\n");
price = 200;
clientCode(lib.strategy.StrategyName.progressDiscount, price);
console.log("----------------------------------\n\n");
clientCode(lib.strategy.StrategyName.voucher, price);
console.log("----------------------------------\n\n");
