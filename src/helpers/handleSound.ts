const handleSound = (
  prevSound: HTMLAudioElement | null,
  currentSound: HTMLAudioElement,
) => {
  if (prevSound) {
    prevSound.pause();
    const stopSound = prevSound;
    stopSound.currentTime = 0;
  }

  currentSound.play();
};

export default handleSound;
