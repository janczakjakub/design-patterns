import * as lib from "../index";

const mediaConversionFacade = new lib.facade.MediaConversionFacade();
const mp4File = mediaConversionFacade.convertVideoFile("video.raw", "mp4");
