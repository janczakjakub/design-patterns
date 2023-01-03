import * as lib from "../index";

const exampleJson = {
    x: 5,
    y: true,
    z: {
        z1: "text",
        z2: "2",
        z3: {
            num: 3,
        },
    },
    n: null,
    a: [1, 2, 3],
};

const converter = new lib.interpreter.JsonInterpreter();
const ymlContent = converter.convertJsonToYml(exampleJson);

console.log("---------JSON-----------");
console.log(exampleJson);
console.log("----------YAML------------");
console.log(ymlContent);
console.log("-----------------------");
