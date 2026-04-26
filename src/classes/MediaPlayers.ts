// Already existing code
// Class 1: Modern system expects this interface
export class MediaPlayer {
    public play(audioType: string, fileName: string) {
        console.log(`Playing ${audioType} file: ${fileName}`);
    }
}
