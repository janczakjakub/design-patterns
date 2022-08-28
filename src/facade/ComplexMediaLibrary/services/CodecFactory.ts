import CodecInterface from "../entity/codec/CodecInterface";
import FLACCodec from "../entity/codec/FLACCodec";
import MediaFile from "../entity/media/MediaFile";
import MPEG4Codec from "../entity/codec/MPEG4Codec";

export default class CodecFactory {
    public static getCodec(file: MediaFile): CodecInterface {
        switch (file.getType()) {
            case "mp4":
                return new MPEG4Codec();
            case "flac":
                return new FLACCodec();
            default:
                throw Error("Invalid media type");
        }
    }
}
