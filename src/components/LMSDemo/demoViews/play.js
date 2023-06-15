import { useEffect } from "react";

const Play = (props) => {
  // Initialize DOM constants
  useEffect(() =>
    props.elearningVideo.current.addEventListener("loadeddata", (event) => {
      props.elearningVideo.current.currentTime = 4;
      setTimeout(() => {
        event.target.classList.add("active");
      }, 500);
    })
  );

  return (
    <div
      style={{
        backgroundSize: "100% auto",
        backgroundRepeat: "no-repeat",
        backgroundPosition: "50% center",
        backgroundImage:
          "url('images/elearnng_1_radek-grzybowski-eBRTYyjwpRY-unsplash.jpg')",
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
