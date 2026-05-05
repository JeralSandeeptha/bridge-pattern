import { MediaPlayerBridge } from "./MediaPlayerBridge.js";

export class AudioPlayer extends MediaPlayerBridge {
    playfile(): void {
        this.mediaPlayer.playAudio();
    }
};
