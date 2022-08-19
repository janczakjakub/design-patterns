import * as lib from "../index";

function sendMessage(sender: lib.adapter.SenderInterface) {
    sender.send(
        "weather forecast",
        "city: Kraków; day: Monday; hottest: high 32,3 °C; coldest: low 15.8 °C; wettest: 4,5 mm; windiest 21 km/h"
    );
}

console.log("sendMessage function work with Sender message");
const senderMessageObj = new lib.adapter.SenderMessage();
sendMessage(senderMessageObj);

console.log("\n==========================================================\n");

console.log("sendMassage function can work with chat using adapter");
const chatApiObj = new lib.adapter.ChatApi("John123", "secretKey");
const chatAdapterObj = new lib.adapter.ChatAdapter(chatApiObj, "Weather service");
sendMessage(chatAdapterObj);
