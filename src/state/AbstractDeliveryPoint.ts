import { AllowedLocationEnum } from "./AllowedLocationEnum";
import Context from "./Context";

export default abstract class AbstractDeliveryPoint {
    protected context: Context;

    protected state: AbstractDeliveryPoint;
    private currentAdress: AllowedLocationEnum;

    constructor(currentAdress: AllowedLocationEnum) {
        this.currentAdress = currentAdress;
    }

    public abstract showLocation(): void;

    public setContext(context: Context) {
        this.context = context;
    }

    public getCurrentAdress(): AllowedLocationEnum {
        return this.currentAdress;
    }
}
