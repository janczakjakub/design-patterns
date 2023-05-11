import {
    AllowedLocationEnum,
    CentralWarehouse,
    Context,
    LocalWarehouse,
    ParcelCollectionPoint,
    ParcelDeliveryPoint,
} from "../state/state";

console.log(`Delivery from ${AllowedLocationEnum.Wroclaw} to ${AllowedLocationEnum.Wroclaw}`);

const context = new Context(new ParcelDeliveryPoint(AllowedLocationEnum.Wroclaw));

const contextState1 = new LocalWarehouse(AllowedLocationEnum.Wroclaw);
context.goToState(contextState1);

const contextState2 = new ParcelCollectionPoint(AllowedLocationEnum.Wroclaw);
context.goToState(contextState2);

console.log(
    "========================================================================================\n\n"
);

console.log(`Delivery from ${AllowedLocationEnum.Krakow} to ${AllowedLocationEnum.NewYork}`);

const context2 = new Context(new ParcelDeliveryPoint(AllowedLocationEnum.Krakow));

const context2State1 = new LocalWarehouse(AllowedLocationEnum.Krakow);
context2.goToState(context2State1);

const context2State2 = new CentralWarehouse(AllowedLocationEnum.Warsaw);
context2.goToState(context2State2);

const context2State3 = new LocalWarehouse(AllowedLocationEnum.NewYork);
context2.goToState(context2State3);

const context2State4 = new ParcelCollectionPoint(AllowedLocationEnum.NewYork);
context2.goToState(context2State4);

console.log(
    "========================================================================================\n\n"
);
