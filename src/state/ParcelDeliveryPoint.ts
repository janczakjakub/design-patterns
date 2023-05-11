import AbstractDeliveryPoint from "./AbstractDeliveryPoint";
import { AllowedLocationEnum } from "./AllowedLocationEnum";

export default class ParcelDeliveryPoint extends AbstractDeliveryPoint {
    constructor(shippingAddress: AllowedLocationEnum) {
        super(shippingAddress);
    }

    public showLocation(): void {
        console.log(`ParcelDeliveryPoint - ${this.getCurrentAdress()}`);
    }
}
