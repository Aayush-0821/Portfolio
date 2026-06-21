export const playClickSound = () =>{
    const audio = new Audio("/sounds/buttonClick.wav");
    audio.volume = 0.5;
    audio.play();
}