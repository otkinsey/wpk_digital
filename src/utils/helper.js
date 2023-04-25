export const playAudioFile = (audio, time = 0) => {
  audio.current.currentTime = time;
  audio.current.play();
};

export const centerSvgContent = (svg) => {
  const height = svg;
};

export const stopAudioFile = (audio) => {
  audio.current.pause();
};

export const centerSvgText = (id) => {};
