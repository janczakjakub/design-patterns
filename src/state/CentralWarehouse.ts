import AbstractDeliveryPoint from "./AbstractDeliveryPoint";

export default class CentralWarehouse extends AbstractDeliveryPoint {
    public showLocation(): void {
        console.log(`Central Warehouse - ${this.getCurrentAdress()}`);
    }
}
