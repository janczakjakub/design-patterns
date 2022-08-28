import MediaFile from "../entity/media/MediaFile";

export default class AudioService {
    public static mixAudioChannel(file: MediaFile): void {
        console.log("Audio Service mixing audio");
    }
}
