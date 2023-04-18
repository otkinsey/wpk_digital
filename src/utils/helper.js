export const playAudioFile = (audio) => {
  audio.current.currentTime = 0;
  audio.current.play();
};

export const centerSvgContent = (svg) => {
  const height = svg;
};

export const stopAudioFile = (audio) => {
  audio.current.pause();
};

export const centerSvgText = (id) => {};
