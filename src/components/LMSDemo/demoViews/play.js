import { useEffect } from "react";

const Play = (props) => {
  // Initialize DOM constants
  useEffect(() => (props.elearningVideo.current.currentTime = 4));

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
      <div className="overlay">
        <video src="elearning.mp4" ref={props.elearningVideo} controls></video>
      </div>
    </div>
  );
};

export default Play;
