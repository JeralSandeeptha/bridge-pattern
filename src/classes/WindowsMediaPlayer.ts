import type { IMediaPlayer } from "./IMediaPlayer.js";

export class WindowsMediaPlayer implements IMediaPlayer {
    playAudio(): void {
        console.log('WindowsMediaPlayer playing audio');
    }
    playVedio(): void {
        console.log('WindowsMediaPlayer playing vedio');
    }
};
