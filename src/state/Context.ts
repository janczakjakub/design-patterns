import AbstractDeliveryPoint from "./AbstractDeliveryPoint";

export default class Context {
    public state: AbstractDeliveryPoint;

    constructor(state: AbstractDeliveryPoint) {
        this.goToState(state);
    }

    public goToState(state: AbstractDeliveryPoint): void {
        this.state = state;
        this.state.setContext(this);
        this.state.showLocation();
    }
}
