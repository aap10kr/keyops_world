import React, { useState } from "react";
import {
  ContentButton,
  VegButton,
  NonVegButton,
  getStoreEnInfo,
  EnBackButton,
  EnForward,
} from "../imgs/InfoAsset";
import styles from "../styles";
import { useRef } from "react";

const EnStoreInfo = ({ storeNum = 0  }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [animation, setAnimation] = useState("");
  //  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  const videoRef = useRef();

  const info = getStoreEnInfo[storeNum];

  if (storeNum > 17) {
    return (
      <div className="w-screen h-screen flex items-center justify-center bg-slate-700 ">
        <h1 className="text-3xl text-white">The wrong approach.</h1>
      </div>
    );
  }

  const handleShowVideo = () => {
    setAnimation("animate-fade-in");
    setShowVideo(true);
    videoRef.current.play();

    setTimeout(() => {
      setAnimation("animate-fade-out");

      // 애니메이션 완료 후 숨기기
      setTimeout(() => {
        setShowVideo(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }, 500); // 애니메이션 지속 시간
    }, 20 * 1000);
  }; // 20초 후 실행

  return (
    <div className="w-screen min-h-screen relative">
      {/* BackGround */}
      <div className=" w-full h-full absolute top-0 left-0">
        <img src={info.backgroundImg} className="w-screen h-screen " />
      </div>

      {/* Video */}
      <div
        className={`${
          showVideo ? "flex" : "hidden"
        } fixed w-full h-full items-center justify-center z-20  ${animation} `}
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-fill "
            src={info.videoUrl}
          />
        </div>
      </div>
      {/* MainContent */}
      <div className="flex flex-col w-full h-screen ">
        {/* Head */}
        <div
          className={`flex z-10 justify-between ${styles.topIconPaddings}  `}
        >
          <button>
            <img src={EnBackButton} />
          </button>
          <button>
            <img src={EnForward} />
          </button>
        </div>

        {/* Content */}
        <div className="relative flex flex-col flex-1 z-10 h-full justify-center items-center">
          <div>
            <img
              className="w-full h-full object-cover"
              src={info.titleImg}
              alt={info.title}
            />
          </div>
          {/** bottom Button */}
          <div className="absolute bottom-0 w-full flex justify-center items-center ">
            <button onClick={handleShowVideo}>
              <img src={ContentButton} />
            </button>
          </div>
        </div>

        {/* footer */}
        <div
          className={`flex justify-end z-10 gap-2 ${styles.bottomIconPaddings}`}
        >
          <div>
            <img src={VegButton} />
          </div>
          <div>
            <img src={NonVegButton} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default EnStoreInfo;
