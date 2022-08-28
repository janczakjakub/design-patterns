import CodecInterface from "../entity/codec/CodecInterface";
import MediaFile from "../entity/media/MediaFile";

export default class MediaService {
    public static read(file: MediaFile, codec: CodecInterface): void {
        console.log("Media Service reading file.");
    }

    public static encodeMediaFormat(file: MediaFile, codec: CodecInterface) {
        console.log("MediaService encoding file.");
    }
}
