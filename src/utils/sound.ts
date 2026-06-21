let clickAudio : HTMLAudioElement | null = null;

export const preLoadSounds = () =>{
    clickAudio = new Audio("/sounds/buttonClick.wav");
    clickAudio.volume = 0.5;
    clickAudio.load();
}

export const playClickSound = () =>{
    if(!clickAudio) preLoadSounds();

    clickAudio!.currentTime = 0;
    clickAudio!.play();
}