import LegacyAudioPlayerAdapter from "./adapters/LegacyAudioPlayerAdapter.js";
import { LegacyAudioPlayer } from "./classes/LegacyAudioPlayer.js";
import { MediaPlayer } from "./classes/MediaPlayers.js";

// we can run directly media player because it supports play function with audio type and file name
const mediaPlayer = new MediaPlayer();
mediaPlayer.play("mp3", "song.mp3");
mediaPlayer.play("wav", "song.wav");

// but we cannot run legacy audio player directly because it has a different interface
// we need to use adapter to make it compatible with media player interface
const legacyPlayer = new LegacyAudioPlayerAdapter(new LegacyAudioPlayer());
legacyPlayer.play("mp3", "song.mp3");
legacyPlayer.play("wav", "song.wav");
