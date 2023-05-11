import AbstractDeliveryPoint from "./AbstractDeliveryPoint";

export default class ParcelCollectionPoint extends AbstractDeliveryPoint {
    public showLocation(): void {
        console.log(`Parcel collection point - ${this.getCurrentAdress()}`);
    }
}
