import { AudioPlayer } from "./classes/AudioPlayer.js";
import { MacOsMediaPlayer } from "./classes/MacOsMediaPlayer.js";
import { VedioPlayer } from "./classes/VedioPlayer.js";
import { WindowsMediaPlayer } from "./classes/WindowsMediaPlayer.js";

const windowsVedioPlayer = new VedioPlayer(new WindowsMediaPlayer());
console.log(windowsVedioPlayer);windowsVedioPlayer

const macosAudioPlayer = new AudioPlayer(new MacOsMediaPlayer());
console.log(macosAudioPlayer);
