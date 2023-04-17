import { useRef, useEffect } from "react";
import { ReactComponent as LogoWhite } from "../../header/logo_white.svg";

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
    <div
      style={{
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% center",
        backgroundImage:
          "url('elearnng_1_radek-grzybowski-eBRTYyjwpRY-unsplash.jpg')",
      }}
      className="main-backdrop"
    >
      <div
        className="overlay"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(1, 1fr)",
        }}
      >
        <LogoWhite style={{ fill: "white" }} />
        <h1 style={{ textAlign: "center" }}>
          <b>Welcome.</b>
        </h1>
        <audio id="demoAudio" src="audio.m4a" ref={audioElement}></audio>
      </div>
    </div>
  );
};

export default Play;
