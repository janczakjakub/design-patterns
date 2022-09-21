import IteratorInterface from "./IteratorInterface";

export default class FibonacciIterator implements IteratorInterface<number> {
    private beforePrevious: number = 0;
    private previous: number = 1;
    private firstExecution: boolean = true;
    private secondExecution: boolean = true;

    public next(): number {
        if (this.firstExecution) {
            this.firstExecution = false;
            return this.beforePrevious;
        }

        if (this.secondExecution) {
            this.secondExecution = false;
            return this.previous;
        }

        const current: number = this.beforePrevious + this.previous;
        this.beforePrevious = this.previous;
        this.previous = current;

        return current;
    }
}
