/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable react/prop-types */
import {
  faBackwardStep,
  faCirclePause,
  faCirclePlay,
  faForwardStep,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link } from "react-router-dom";
import { useRef, useState, useEffect } from "react";

const timeInSeconds = (timeString) => {
  const splitArray = timeString.split(":");

  const minutes = Number(splitArray[0]);
  const seconds = Number(splitArray[1]);

  return seconds + minutes * 60;
};

const formatTime = (timeInSeconds) => {
  const minutes = Math.floor(timeInSeconds / 60)
    .toString()
    .padStart(2, "0");
  const seconds = Math.floor(timeInSeconds % 60)
    .toString()
    .padStart(2, "0");
  return `${minutes}:${seconds}`;
};

export const Player = ({
  duration,
  randomIdFromArtist,
  randomId2FromArtist,
  audio,
}) => {
  const audioPlayer = useRef();
  const progressBar = useRef();
  const [isPlaying, setIsPlaying] = useState(false);

  const [currentTime, setCurrentTime] = useState(formatTime(0));
  const durationInSeconds = timeInSeconds(duration);

  const functionPlayPause = () => {
    isPlaying ? audioPlayer.current.pause() : audioPlayer.current.play();
    setIsPlaying(!isPlaying);
    setCurrentTime(formatTime(audioPlayer.current.currentTime));
  };

  // biome-ignore lint/correctness/useExhaustiveDependencies: <explanation>
  useEffect(() => {
    const intervalId = setInterval(() => {
      if (isPlaying)
        setCurrentTime(formatTime(audioPlayer.current.currentTime));

      progressBar.current.style.setProperty(
        "--_progress",
        `${(audioPlayer.current.currentTime / durationInSeconds) * 100}%`
      );
    }, 1000); // 1000ms -> 1 segundo

    return () => clearInterval(intervalId);
  }, [isPlaying]);

  return (
    <div className="player">
      <div className="player__controllers">
        <Link to={`/song/${randomIdFromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faBackwardStep} />
        </Link>
        <FontAwesomeIcon
          className="player__icon player__icon--play"
          icon={isPlaying ? faCirclePause : faCirclePlay}
          onClick={() => functionPlayPause()}
        />
        <Link to={`/song/${randomId2FromArtist}`}>
          <FontAwesomeIcon className="player__icon" icon={faForwardStep} />
        </Link>
      </div>
      <div className="player__progress">
        <p>{currentTime}</p>
        <div className="player__bar">
          {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
          <div ref={progressBar} className="player__bar-progress"></div>
        </div>
        <p>{duration}</p>
      </div>

      {/* biome-ignore lint/style/useSelfClosingElements: <explanation> */}
      {/* biome-ignore lint/a11y/useMediaCaption: <explanation> */}
      <audio ref={audioPlayer} src={audio}></audio>
    </div>
  );
};
