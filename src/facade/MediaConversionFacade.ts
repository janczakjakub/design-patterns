import CodecInterface from "./ComplexMediaLibrary/entity/codec/CodecInterface";
import MediaFile from "./ComplexMediaLibrary/entity/media/MediaFile";
import AudioService from "./ComplexMediaLibrary/services/AudioService";
import CodecFactory from "./ComplexMediaLibrary/services/CodecFactory";
import MediaService from "./ComplexMediaLibrary/services/MediaService";

export default class MediaConversionFacade {
    public convertVideoFile(fileName: string, format: string) {
        console.log("Facade: convert video format");
        let videoFile: MediaFile = new MediaFile(fileName, format);
        const mp4Codec: CodecInterface = CodecFactory.getCodec(videoFile);
        MediaService.read(videoFile, mp4Codec);
        MediaService.encodeMediaFormat(videoFile, mp4Codec);
        AudioService.mixAudioChannel(videoFile);
        console.log("Process complete.");
    }
}
