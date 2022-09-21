import * as lib from "../index";

const fibonaciSequence = new lib.iterator.FibonacciIterator();
let fibonacciNumbers: number[] = [];

console.log("Show first twenty numbers of fibonacci sequence");

for (let i = 0; i < 20; i++) {
    fibonacciNumbers.push(fibonaciSequence.next());
}

console.log(fibonacciNumbers.toString());
