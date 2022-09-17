import * as lib from "../index";

const fileEditor = new lib.observer.SimpleFileEditor();
const loggerService = new lib.observer.LogListener();
const emailService = new lib.observer.EmailListener();

fileEditor.getEventManager().subscribe(loggerService);
fileEditor.getEventManager().subscribe(emailService);

fileEditor.openFile("example-for-open.bin");
console.log("--------------------------------------------");
fileEditor.saveile("example-for-save.txt");

console.log("--------------------------------------------");
fileEditor.getEventManager().unsubscribe(emailService);
fileEditor.openFile("example-for-open-2.bin");
