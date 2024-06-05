// Se reproduce la música al presionar cualquier tecla
export const startAudio = (audio: HTMLAudioElement, audioStarted: boolean): void => {
    document.addEventListener("keydown", function (event: KeyboardEvent) {
        if (!audioStarted) {
        audio.play();
        audioStarted = true;
        }
    });
}