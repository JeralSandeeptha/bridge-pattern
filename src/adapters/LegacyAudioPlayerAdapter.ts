import type { LegacyAudioPlayer } from "../classes/LegacyAudioPlayer.js";
import type { IAdapter } from "./IAdapter.js";

class LegacyAudioPlayerAdapter implements IAdapter {
    private legacyAudioPlayer: LegacyAudioPlayer;

    constructor(legacyAudioPlayer: LegacyAudioPlayer) {
        this.legacyAudioPlayer = legacyAudioPlayer;
    }

    play(audioType: string, fileName: string): void {
        if (audioType === "mp3") {
            this.legacyAudioPlayer.playMp3(fileName);
        } else {
            console.log("Unsupported audio type: " + audioType);
        }
    }
}

export default LegacyAudioPlayerAdapter;
