import AbstractDeliveryPoint from "./AbstractDeliveryPoint";

export default class LocalWarehouse extends AbstractDeliveryPoint {
    public showLocation(): void {
        console.log(`Local Warehouse - ${this.getCurrentAdress()}`);
    }
}
