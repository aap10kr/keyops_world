import React, { useState } from "react";
import { Link } from 'react-router-dom';
import {
  Forward,
  BackButton,
  getStoreInfo,
  ContentButton,
  VegButton,
  NonVegButton,
} from "../imgs/InfoAsset";
import styles from "../styles";
import { useRef } from "react";
import HomeBtn from '../imgs/home.png';
import TopLine from '../imgs/InfoAsset/titleImg/topLine.png';

const StoreInfo = ({ storeNum, fn }) => {
  console.log(storeNum)
  const info = getStoreInfo[storeNum];

  const [showVideo, setShowVideo] = useState(false);

  //  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);

  const videoRef = useRef();

  const handleShowVideo = () => {
    setShowVideo(true);
    videoRef.current.play();

    setTimeout(() => {

      // 애니메이션 완료 후 숨기기
      setTimeout(() => {
        setShowVideo(false);
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
        fn();
      }, 500); // 애니메이션 지속 시간
    }, 5 * 1000);
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
        } fixed w-full h-full items-center justify-center z-20 `}
      >
        <div className="relative w-full h-full">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-fill"
            src={info.videoUrl}
          />
          <div className="relative flex justify-center z-50 w-full">
            <img src={TopLine} className="mt-4 px-4"/>
          </div>
        </div>
      </div>
      {/* MainContent */}
      <div className="flex flex-col w-full h-screen ">
        {/* Head */}
        <div
          className={`flex z-10 justify-between ${styles.topIconPaddings}  `}
        >
          <Link to="/">
              <img src={HomeBtn} alt=""/>
          </Link>
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
          <div className="absolute bottom-0 w-full flex justify-center items-center">
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

export default StoreInfo;
