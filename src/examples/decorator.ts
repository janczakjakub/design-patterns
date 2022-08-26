import * as lib from "../index";

const text: string = "Hello decorator";

const textDataSource = new lib.decorator.TextFileDataSource("text.txt");
textDataSource.writeData(text);
const plainText: string = textDataSource.readData();
console.log("plain text is");
console.log(plainText);

console.log("\ndecorated text");
const textEncryptionSource = new lib.decorator.TextEncryptionDecorator(textDataSource);
textEncryptionSource.writeData(text);
const decoratedText: string = textDataSource.readData();
console.log("text after decorated is encrypted");
console.log(decoratedText + "\n");

const decryptedText: string = textEncryptionSource.readData();
console.log("method readData was decorated and now can read text and decrypt");
console.log(decryptedText);
