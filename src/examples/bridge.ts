import * as lib from "../index";

const radio = new lib.bridge.Radio();

console.log("=== Standard ===");
const standardRadioRemoteControl = new lib.bridge.StandardRemoteControl(radio);
standardRadioRemoteControl.power();
standardRadioRemoteControl.channelUp();
standardRadioRemoteControl.channelUp();
standardRadioRemoteControl.volumeUp();
radio.showInformation();

console.log("=== Extended ===");
const extendedRadioRemoteControl = new lib.bridge.ExtendedRemoteControl(radio);
extendedRadioRemoteControl.mute();
extendedRadioRemoteControl.setRandomChanel();
radio.showInformation();

console.log("=============\n");

const tv = new lib.bridge.TV();

console.log("=== Standard ===");
const standardTVRemoteControl = new lib.bridge.StandardRemoteControl(tv);
standardTVRemoteControl.power();
standardTVRemoteControl.channelUp();
standardTVRemoteControl.channelDown();
standardTVRemoteControl.volumeUp();
standardTVRemoteControl.volumeUp();
standardTVRemoteControl.volumeUp();
standardTVRemoteControl.volumeDown();
tv.showInformation();

console.log("=== Extended ===");
const extendedTVRemoteControl = new lib.bridge.ExtendedRemoteControl(tv);
extendedTVRemoteControl.mute();
extendedTVRemoteControl.setRandomChanel();
tv.showInformation();
console.log("=============");
