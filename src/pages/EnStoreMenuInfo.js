import React, { useState } from "react";
import {
  Forward,
  BackButton,
  getStoreMenuEnInfo,
  ContentButton,
  VegButton,
  NonVegButton,
} from "../imgs/InfoAsset";
import styles from "../styles";
import { useRef } from "react";
import HomeBtn from '../imgs/home.png';
import TopLine from '../imgs/InfoAsset/titleImg/topLine.png';
import Timer from '../imgs/InfoAsset/Timer.png'
import coupon from '../imgs/Group 8771.png'
import VideoCoupon from '../imgs/video_coupon.png'
import Return from '../imgs/Group 848s3.png'
import MapLink from '../imgs/mapLink.png'

const StoreInfo = ({ storeNum, fn}) => {
    console.log(storeNum)
  const info = getStoreMenuEnInfo[storeNum];
  const [showVideo, setShowVideo] = useState(false);
  const [count, setCount] = useState(20);
  const [closeBtn, setCloseBtn] = useState(false);
  const [iframe, setIframe] = useState(false);

  const videoRef = useRef();

  const handleShowVideo = () => {
    setShowVideo(true);
    videoRef.current.play();

    setCount(20);      
    const countdown = setInterval(() => {
      setCount((prevCount) => prevCount - 1);
    }, 1000);

    setTimeout(() => {
      clearInterval(countdown);
      // 애니메이션 완료 후 숨기기
    }, 20 * 1000);

    setTimeout(() => {
      setCloseBtn(true);
    }, 15 * 1000);
  }; 

  function iframenmap(){
    setIframe(true);
    videoRef.current.pause();
  }

  function iframenmapClose(){
    setIframe(false);
    videoRef.current.play();
  }

  function returnmap(){
    fn();
  }

  return (
    <>
      {iframe &&
          <div className="z-50 absolute w-screen h-screen bg-gray-700/70" onClick={() => iframenmapClose()}>
              <div className="fixed w-full h-full flex justify-center items-center">
                  <iframe src={info.linkUrl} className="w-9/12 h-[320px]"></iframe>
              </div>
          </div>
      }
    <div className="w-screen min-h-screen relative">
      {/* BackGround */}
      <div className=" w-full h-full absolute top-0 left-0">
        <img src={info.backgroundImg} className="w-screen h-screen"/>
      </div>
      {/* Video */}
      <div
        className={`${
          showVideo ? "flex" : "hidden"
        } fixed w-full h-full items-center justify-center z-20 `}
      >
        <div className="relative w-full h-full bg-black">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-none"
            src={info.videoUrl}
            playsInline
            controlsList="nodownload"
          />
          <div className="relative flex justify-center z-50w-full">
            <div className="absolute w-full p-6">
              <div className="flex w-full justify-between items-center border-t-2 gap-2">
                <div className="flex">
                  <img src={Timer} className="w-4 mt-2 mr-2"/>
                  <div className="text-white text-sm mt-2">
                    00:{count > 9 ? count : "0" + count}
                  </div>
                </div>
                <div>
                  <button onClick={()=>returnmap()} className="mt-2">
                    <img src={Return} alt=""/>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full h-full flex pb-2 ml-6">
            <button className="flex items-end" onClick={() => iframenmap()}>
                <img src={MapLink} alt="" className="relative z-50"/>
            </button>
          </div>
        </div>
      </div>
      {/* MainContent */}
      <div className="flex flex-col w-full h-screen ">
        {/* Head */}
        {/* Content */}
        <div className="relative flex flex-col flex-1 z-10 top-[-40px] h-full justify-center items-center">
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
      </div>
    </div>
    </>
  );
};

export default StoreInfo;
