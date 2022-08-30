import * as lib from "../index";

const invoker = new lib.command.ClothesInvoker();
const tailorReceiver = new lib.command.TailorReceiver();
const shoeRevceiver = new lib.command.ShoemakerReceiver();

const client = new lib.command.Client(invoker, tailorReceiver, shoeRevceiver);

client.makeOrder("John", "tshirt");
client.makeOrder("Martha", "dress");
client.makeOrder("James", "shoes");
client.makeOrder("Mary", "pants");
