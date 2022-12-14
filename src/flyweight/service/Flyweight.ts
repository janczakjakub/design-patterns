export default class Flyweight {
    private sharedState: any;

    constructor(sharedState: any) {
        this.sharedState = sharedState;
    }

    public operation(uniqueState: any): void {
        const shared = JSON.stringify(this.sharedState);
        const unique = JSON.stringify(uniqueState);
        console.log("Flyweight: Show shared " + shared + " and unique " + unique + " state");
    }
}
