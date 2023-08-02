import React, { useState } from "react";
import axios from "axios";
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
import Timer from '../imgs/InfoAsset/Timer.png'
import coupon from "../imgs/En_coupon_open.png";
import VideoCoupon from "../imgs/pop_coupon.png";

const EnStoreInfo = ({ storeNum, fn, couponCount }) => {
  const [showVideo, setShowVideo] = useState(false);
  const [animation, setAnimation] = useState("");
  const [count, setCount] = useState(20);
  const [closeBtn, setCloseBtn] = useState(false);
  const [couponNum, setCouponNum] = useState("");
  const [videoCoupon, setVideoCoupon] = useState(false);
  const [currentDate, setCurrentDate] = useState(new Date());
  //  const [hasWatchedVideo, setHasWatchedVideo] = useState(false);
  const videoRef = useRef();

  const info = getStoreEnInfo[storeNum-1];
  
  async function getCouponCode() {
    var couponCode = "";
    try {
      const response = await axios.get("/world/selectCoupon.axios");
      console.log(response.data);
      couponCode = response.data;
      setCouponNum(couponCode);
    } catch (error) {
      console.error(error);
    }
    return couponCode;
  }

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
  }; // 20초 후 실행

  async function getCouponCode() {
    var couponCode = "";
    try {
      const response = await axios.get("https://keyops.gabia.io/world/selectCoupon.axios");
      console.log(response.data);
      couponCode = response.data;
      setCouponNum(couponCode);
    } catch (error) {
      console.error(error);
    }
    return couponCode;
  }

  function couponOpen() {
    setVideoCoupon(true);
    setCloseBtn(false);
    setShowVideo(false);
    getCouponCode();
    videoRef.current.pause();
  }

  function couponclose() {
    setVideoCoupon(false);
    fn();
  }

  return (
    <>
    {videoCoupon && (
      <div className="z-50 absolute w-screen h-screen bg-gray-700">
        <div className="fixed w-full flex justify-center items-center">
          <button
            onClick={() => couponclose()}
            className="relative w-full h-screen flex justify-center items-center"
          >
            <div className="absolute">
              {
                couponNum <= 9
                ? <div className="z-50 text-2xl mb-2 mt-10 font-bold">KEYUP COUPON {couponCount}</div>
                : <div className="z-50 text-2xl mb-2 mt-10 font-bold">The coupon has expired.</div> 
              }
              <p className="text-xs text-gray-600">{currentDate.toLocaleDateString()}</p>
            </div>
            <img src={VideoCoupon} alt="" className="w-[400px]" />
          </button>
        </div>
      </div>
    )}
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
        <div className="relative w-full h-full bg-black">
          <video
            ref={videoRef}
            className="absolute top-0 left-0 w-full h-full object-none"
            src={info.videoUrl}
          />
          <div className="relative flex justify-center z-50 w-full">
            <div className="absolute w-full p-6">
              <div className="flex w-full items-center border-t-2 gap-2">
                <img src={Timer} className="w-4 mt-2"/>
                <div className="text-white text-sm mt-2">
                  00:{count > 9 ? count : "0" + count}
                </div>
              </div>
            </div>
            {closeBtn && (
                <button className="flex w-full h-screen relative items-end left-6 bottom-0">
                  <img
                    src={coupon}
                    alt=""
                    className="mb-8"
                    onClick={() => {
                      couponOpen();
                    }}
                  />
                </button>
             )}
          </div>
        </div>
      </div>
      {/* MainContent */}
      <div className="flex flex-col w-full h-screen ">
        {/* Head */}
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
          <div className="absolute bottom-14 w-full flex justify-center items-center ">
            <button onClick={handleShowVideo}>
              <img src={ContentButton} />
            </button>
          </div>
        </div>

        {/* footer */}
       {/*  <div
          className={`flex justify-end z-10 gap-2 ${styles.bottomIconPaddings}`}
        >
          <div>
            <img src={VegButton} />
          </div>
          <div>
            <img src={NonVegButton} />
          </div>
        </div> */}
      </div>
    </div>
    </>
  );
};

export default EnStoreInfo;
