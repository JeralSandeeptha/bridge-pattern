import type { IMediaPlayer } from "./IMediaPlayer.js";

export class MacOsMediaPlayer implements IMediaPlayer {
  playAudio(): void {
    console.log("MacOsMediaPlayer playing audio");
  }
  playVedio(): void {
    console.log("MacOsMediaPlayer playing audio");
  }
}
