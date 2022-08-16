import * as lib from "../index";

function clientCode(date: Date) {
    const weekend: lib.singleton.Weekend = lib.singleton.Weekend.getInstance();

    console.log(`Date is: ${date}. Is weekend? ${weekend.isWeekend(date)}`);
}

const today: Date = new Date();
clientCode(today);

const date01 = new Date("August 26, 2022 22:00:10");
clientCode(date01);

const date02 = new Date("December 20, 1995 23:15:00");
clientCode(date02);

const date03 = new Date("August 20, 2022 18:10:00");
clientCode(date03);
