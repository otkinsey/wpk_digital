import { useRef, useEffect } from "react";

const Play = (props) => {
  const audioElement = useRef(null);
  const playAudioFile = (audio) => {
    audio.current.currentTime = 0;
    audio.current.play();
  };

  const stopAudioFile = (audio) => {
    audio.current.pause();
  };
  useEffect(() => {
    props.LMSActive ? playAudioFile(audioElement) : stopAudioFile(audioElement);
  });
  return (
    <div>
      <h1>Play</h1>
      <audio
        id="demoAudio"
        src="audio.m4a"
        ref={audioElement}

        // muted={true}
      ></audio>
    </div>
  );
};

export default Play;
