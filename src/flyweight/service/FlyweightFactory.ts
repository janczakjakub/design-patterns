import Flyweight from "./Flyweight";

export default class FlyweightFactory {
    private flyweights: { [key: string]: Flyweight } = <any>{};

    constructor(initFlyweights: string[][]) {
        for (let state of initFlyweights) {
            this.flyweights[this.getUniqueKey(state)] = new Flyweight(state);
        }
    }

    private getUniqueKey(state: string[]): string {
        return state.join("_");
    }

    public getFlyweight(sharedState: string[]): Flyweight {
        const uniqueKey = this.getUniqueKey(sharedState);

        if (!(uniqueKey in this.flyweights)) {
            console.log("Flyweight not exists, creatine new flyweigh object");
            this.flyweights[uniqueKey] = new Flyweight(sharedState);
        } else {
            console.log("Flyweight exists");
        }

        return this.flyweights[uniqueKey];
    }

    public showFlyweightList(): void {
        const countedFlyweight = Object.keys(this.flyweights).length;
        console.log("Counted flyweights: " + countedFlyweight);

        for (let flyweightObj in this.flyweights) {
            console.log(flyweightObj);
        }

        console.log("\n----------------------------------------------------------\n");
    }
}
