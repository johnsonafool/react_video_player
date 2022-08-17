// import React from "react";
import { useRef } from "react";
import "./App.css";
import video from "./assets/csl.mp4";
import useVideoPlayer from "./hooks/useVideoPlayer";

const App = () => {
  const videoElement = useRef(null); // create videoElement's ref
  const {
    playerState,
    togglePlay,
    toggleMuted,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
  } = useVideoPlayer(videoElement);

  return (
    <div className="container">
      <div className="video-wrapepr">
        {/* <h1>This is a debug tag</h1> */}
        <video
          src={video}
          ref={videoElement}
          onTimeUpdate={handleOnTimeUpdate} // pros of video to pass to other target event
        />
      </div>
      <div className="controls">
        <div className="actions">
          <button onClick={togglePlay}>
            {!playerState.isPlaying ? (
              <i className="bx bx-play"></i>
            ) : (
              <i className="bx bx-pause"></i>
            )}
          </button>
        </div>
        <input
          type="range"
          min="0"
          max="100"
          value={playerState.progess}
          onChange={(e) => handleVideoProgress(e)} // progress bar
        />
        <select
          className="velocity"
          value={playerState.speed}
          onChange={(e) => handleVideoSpeed(e)} // play speed selector
        >
          <option value="0.50">0.50x</option>
          <option value="1">1x</option>
          <option value="1.25">1.25x</option>
          <option value="2">2x</option>
        </select>
        <button className="mute-btn" onClick={toggleMuted}>
          {
            // isMuted logic
            !playerState.isMuted ? (
              <i className="bx bxs-volume-full"></i>
            ) : (
              <i className="bx bxs-volume-mute"></i>
            )
          }
        </button>
      </div>
    </div>
  );
};

export default App;
