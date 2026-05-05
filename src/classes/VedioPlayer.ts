import { MediaPlayerBridge } from "./MediaPlayerBridge.js";

export class VedioPlayer extends MediaPlayerBridge {
    playfile(): void {
        this.mediaPlayer.playVedio();
    }
};
