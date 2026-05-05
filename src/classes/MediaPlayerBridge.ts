import type { IMediaPlayer } from "./IMediaPlayer.js";

export abstract class MediaPlayerBridge {

    constructor(protected mediaPlayer: IMediaPlayer) {};

    abstract playfile(): void;
};
