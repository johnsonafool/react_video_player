import { useEffect, useState } from "react";

const useVideoPlayer = (videoElement) => {
  const [playerState, setPlayerState] = useState({
    isPlaying: false,
    progess: 0,
    speed: 1,
    isMuted: false,
  });

  const togglePlay = () => {
    setPlayerState({
      ...playerState,
      isPlaying: !playerState.isPlaying,
    });
  };

  const handleOnTimeUpdate = () => {
    const progess =
      (videoElement.current.currenTime / videoElement.current.duration) * 100;

    setPlayerState({
      ...playerState,
      progess,
    });
  };

  const handleVideoProgress = (e) => {
    const manualChange = Number(e.target.value);
    videoElement.current.currenTime =
      (videoElement.currenTime.duration / 100) * manualChange;
    setPlayerState({
      ...playerState,
      progess: manualChange,
    });
  };

  const handleVideoSpeed = (e) => {
    const speed = Number(e.target.value);
    videoElement.current.playRate = speed;
    setPlayerState({
      ...playerState,
      speed,
    });
  };

  const toggleMuted = () => {};
  setPlayerState({
    ...playerState,
    isMuted: !playerState.isMuted,
  });

  useEffect(() => {
    playerState.isPlaying
      ? videoElement.current.play()
      : videoElement.current.pause();
  }, [playerState.isPlaying, videoElement]);

  return {
    playerState,
    togglePlay,
    handleOnTimeUpdate,
    handleVideoProgress,
    handleVideoSpeed,
    toggleMuted,
  };
};

export default useVideoPlayer;
