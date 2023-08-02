import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import LoadingPage from "../components/loading.js";

import Select_img from "../imgs/map_img.png";
import nextBtn from "../imgs/nextBtn.png";
import CloseBtn from "../imgs/closeBtn.png";
import HomeBtn from "../imgs/home.png";
import GameBtn from "../imgs/userName.png";
import Touch from "../imgs/firstTouch.png";
import Coupon from "../imgs/coupon.png";
import RightBtn from "../imgs/RightButton.png"
import Boom from "../imgs/boom.png"

//markerlayer
import 해목 from "../images/해목.png";
import 거대곰탕 from "../images/거대곰탕.png";
import 꽝 from "../images/꽝.png";
import 깡통시장 from "../images/깡통시장.png";
import 해운대암소갈비 from "../images/해운대암소갈비.png";
import 부산국밥거리 from "../images/부산국밥거리.png";
import 솥솥 from "../images/솥솥.png";
import 융캉찌에 from "../images/융캉찌에.png";
import 불란사그로서리 from "../images/불란서그로서리.png";
import 꽝2 from "../images/꽝2.png";
import 상국이네 from "../images/상국이네.png";
import 포항돼지국밥 from "../images/포항돼지국밥.png";
import 밀락더마켓 from "../images/밀락더마켓.png";
import 굿올데이즈 from "../images/굿올데이즈.png";
import 꽝3 from "../images/Rhkd3.png";
import 칭구회포차 from "../images/칭구회포차.png";
import 광안다찌 from "../images/광안다찌.png";
import 담윤 from "../images/담윤.png";
import 삼진어묵 from "../images/삼진어묵.png";
import 꽝4 from "../images/Rhkd4.png";
import 모모스커피 from "../images/모모스커피.png";
import 황제잠수함 from "../images/황제잠수함.png";
import 올드머그 from "../images/올드머그.png";

import StoreInfo from "../pages/StoreInfo";
import EnStoreInfo from "../pages/EnStoreInfo.js";
import Dice from "./Dice.js";
import RightNav from "./RightNav.js";

const Map = () => {
  const [istouch, setIsTouch] = useState(true);
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const [isPopupOpen2, setIsPopupOpen2] = useState(false);
  const [homeButton, setHomeButton] = useState(true);
  const [isLoding, setIsLoding] = useState(false);
  const [clicknum, setClicknum] = useState(0);
  const [playSection, setPlaySection] = useState(false);
  const [coupon, setCoupon] = useState(false);
  const [boom, setBoom] = useState(false);

  const [buttonScore, setButtonscore] = useState(false);
  const [buttonGroup, setButtonGroup] = useState(false);

  const [isShowDice, setIsShowDice] = useState(false);
  const [diceOne, setDiceOne] = useState(6);

  const [isShowNav, setIsShowNav] = useState(false);
  const [isShowNavBtn, setIsShowNavBtn] = useState(false);

  const [currentNum, setCurrentNum] = useState(0);
  const [playCount, setPlayCount] = useState(8);


  function TouchPopup() {
    setIsTouch(false);
    setIsPopupOpen(true);
    axiosGet()
  }

  function closePopup() {
    setIsPopupOpen(false);
    setIsPopupOpen2(true);
  }

  function closePopup2() {
    setIsPopupOpen2(false);
    setIsLoding(true);
    setHomeButton(false);
    setTimeout(() => {
      setIsLoding(false);
      setHomeButton(true);
      setButtonscore(true);
    }, 1000);
  }
  function playButon(num) {
    setTimeout(() => {
      setButtonGroup(false);
      setPlaySection(true);
      setHomeButton(false);
    }, 1000);
  }

  const [data, setData] = useState('');

  const loc = window.location;
  const params = new URLSearchParams(loc.search);
  const userno = parseInt(params.get("userNo"));
  const username = parseInt(params.get("userName"));
 
  const axiosGet = async() => {
    // 과거 당첨 기록
    return axios.get('/world/userWinYn.axios', {params:{userNo:userno}})
         .then(reponse => { setData(reponse.data);
                console.log(reponse.data);
              })
         .catch(error=>{console.log(error);})
  }
console.log(data)
  const axiosPost = async() => {
    // 과거 당첨 기록
    axios.post('/world/userWin.axios', {}, {params:{userNo:userno}})
         .then(reponse => { setData(reponse.data);
                console.log(reponse.data);
              })
         .catch(error=>{console.log(error);})
  }

  function DicePlay() {
    axiosPost()
    // 클릭시 랜덤값으로 dice1,2 집어넣고, 컴포넌트 On
    const newDiceOne = Math.floor(Math.random() * 6) + 1;

    setIsShowDice(true);
    setDiceOne(newDiceOne);
    setButtonGroup(false);

    const newCurrentNum = currentNum + (newDiceOne);

    if (newCurrentNum > 23) {
      setIsShowDice(true);
      setTimeout(() => {
        setIsShowDice(false);
        setTimeout(() => {
          setButtonGroup(true);
        }, 500);
      }, 2000);
/*       setTimeout(() => {
        if(data == "N"){
          //axiosPost(); 
        }else{
          playButon(newCurrentNum);
        }
      }, 3500); */
      setButtonGroup(false);
      setCurrentNum(newCurrentNum - 23);
      setButtonscore(false);
      setButtonGroup(false);
    } else if(newCurrentNum == 3 || newCurrentNum == 10 || newCurrentNum == 15 || newCurrentNum == 20) {
      setCurrentNum(newCurrentNum);
      setIsShowDice(true);
      setButtonGroup(true);
      setTimeout(() => {
        setButtonGroup(true);
      }, 2500);
      setTimeout(() => {
          setBoom(true);
          setIsShowDice(false);
          setButtonscore(false);
          setButtonGroup(false);
      }, 3000);
    }else {
      setCurrentNum(newCurrentNum);
      setTimeout(() => {
        setButtonGroup(true)
      }, 2500);
      setTimeout(() => {
        playButon(newCurrentNum);
        setButtonscore(false);
        setIsShowDice(false);
      }, 2300);
    }

    if (playCount == 0) {
      setPlayCount(false);
    }
  }

  function HandleButton() {
    setPlaySection(false);
    setHomeButton(true);
    setButtonGroup(true);
    setPlayCount(playCount - 1);
    setButtonscore(true);
  }

  function closeCoupon(){
    setCoupon(false);
    playButon(currentNum);
    setButtonscore(false);
    setIsShowDice(false);
    setIsShowNavBtn(true)
  }

  function closeBoom(){
    setBoom(false);
    setButtonscore(true);
    setButtonGroup(true);
  }

  function RightSection(index){
    setClicknum(index)
    setPlaySection(true);
    setIsShowNav(false);
    setHomeButton(false);
    setButtonscore(false);
    setButtonscore(false);
    setButtonGroup(false);
  }

  function rightBtnOpen(){
    setIsShowNav(true);
    if(isShowNav === true){
      setButtonGroup(false);
    }else if (isShowNav === false){
      setButtonGroup(true);
    }
  }

  //currentNum

  return (
    <>
      {isShowNav && <RightNav RightSection={RightSection}/>}
      <div className="absolute w-screen h-screen" onClick={() => setIsShowNav(false)}>
        {boom &&
           <div className="z-50 w-screen h-screen bg-gray-700/70">
           <div className="fixed w-full flex justify-center items-center">
             <button
               onClick={() => closeBoom()}
               className="relative w-full h-screen flex justify-center items-center"
             >
               <img src={Boom} alt="" className="w-[300px]"/>
             </button>
           </div>
         </div>
        }
        {coupon &&
          <div className="z-50 w-screen h-screen bg-gray-700/70">
            <div className="fixed w-full flex justify-center items-center">
              <button
                onClick={() => closeCoupon()}
                className="relative flex justify-center items-center"
              >
                <img src={Coupon} alt="" className="w-[400px]"/>
              </button>
            </div>
          </div>
        }
        {isShowDice && <Dice diceOneNum={diceOne}  />} 
        {istouch && (
          <div
            className="z-50 w-screen h-screen flex justify-center items-center bg-gray-700/70"
            onClick={() => TouchPopup()}
          >
            <img src={Touch} alt="" />
          </div>
        )}
        {homeButton && (
          <div className="absolute w-full flex justify-between px-10 mt-6 z-50">
            <button>
              <Link to="/">
                <img src={HomeBtn} alt="" />
              </Link>
            </button>
            <button>
              <a href="https://keyops.gabia.io/" className="flex">
                <span className="text-white text-sm">{username}</span>
                <img src={GameBtn} alt="" className="ml-1"/>
              </a>
            </button>
          </div>
        )}
        {isPopupOpen && (
          <div className="z-50 w-screen h-screen bg-gray-700/70">
            <div className="fixed flex bottom-6 right-6">
              <button
                onClick={() => closePopup()}
                className="relative flex bottom-0 right-0"
              >
                <img src={nextBtn} alt="" />
              </button>
            </div>
          </div>
        )}
        {isPopupOpen2 && (
          <div className="z-50 w-screen h-screen bg-gray-700/70">
            <div className="fixed flex bottom-6 right-6">
              <button
                onClick={() => closePopup2()}
                className="relative flex bottom-0 right-0"
              >
                <img src={CloseBtn} alt="" />
              </button>
            </div>
          </div>
        )}
        {isLoding && <LoadingPage />}
        {playSection && <StoreInfo storeNum={clicknum} fn={HandleButton}/>}
      </div>
      <div className="z-30 w-screen h-screen flex justify-center items-center bg-[#9C9C9C]">
        {buttonScore && (
          <div className="absolute z-20 bottom-4 left-[2rem] w-[92%] flex justify-between items-center">
            <button
              className="bg-white rounded-lg flex justify-center items-center"
              onClick={() => DicePlay()}
              disabled={playCount <= 0}
            >
              <div className="px-2.5 py-0.5">
                <span className="text-xs font-semibold tracking-tighter">
                  현재 잔여횟수
                </span>
                <div className="flex justify-center items-center relative top-[-4px]">
                  <div className="text-pink-600 font-bold">{playCount}</div>
                  <div className="font-bold px-1.5">/</div>
                  <div className="font-bold">8</div>
                </div>
              </div>
            </button>
            {isShowNavBtn &&
            <button onClick={() =>rightBtnOpen()}>
              <img src={RightBtn} />
            </button>
            }
          </div>
        )}
        {buttonGroup && (
          <div className="absolute z-10" onClick={() => setIsShowNav(false)}>
            {currentNum === 1 && (
              <div>
                <img src={해목} alt=""/>
              </div>
            )}
            {currentNum === 2 && (
              <div>
                <img src={거대곰탕} alt=""/>
              </div>
            )}
            {currentNum === 3 && (
              <div>
                <img src={꽝} alt=""/>
              </div>
            )}
            {currentNum === 4 && (
              <div>
                <img src={깡통시장} alt=""/>
              </div>
            )}
            {currentNum === 5 && (
              <div>
                <img src={해운대암소갈비} alt=""/>
              </div>
            )}
            {currentNum === 6 && (
              <div>
                <img src={부산국밥거리} alt=""/>
              </div>
            )}
            {currentNum === 7 && (
              <div>
                <img src={솥솥} alt=""/>
              </div>
            )}
            {currentNum === 8 && (
              <div>
                <img src={융캉찌에} alt=""/>
              </div>
            )}
            {currentNum === 9 && (
              <div>
                <img src={불란사그로서리} alt=""/>
              </div>
            )}
            {currentNum === 10 && (
              <div>
                <img src={꽝2} alt=""/>
              </div>
            )}
            {currentNum === 11 && (
              <div>
                <img src={상국이네} alt=""/>
              </div>
            )}
            {currentNum === 12 && (
              <div>
                <img src={포항돼지국밥} alt=""/>
              </div>
            )}
            {currentNum === 13 && (
              <div>
                <img src={밀락더마켓} alt=""/>
              </div>
            )}
            {currentNum === 14 && (
              <div>
                <img src={굿올데이즈} alt=""/>
              </div>
            )}
            {currentNum === 15 && (
              <div>
                <img src={꽝3} alt=""/>
              </div>
            )}
            {currentNum === 16 && (
              <div>
                <img src={칭구회포차} alt=""/>
              </div>
            )}
            {currentNum === 17 && (
              <div>
                <img src={광안다찌} alt=""/>
              </div>
            )}
            {currentNum === 18 && (
              <div>
                <img src={담윤} alt=""/>
              </div>
            )}
            {currentNum === 19 && (
              <div>
                <img src={삼진어묵} alt=""/>
              </div>
            )}
            {currentNum === 20 && (
              <div>
                <img src={꽝4} alt=""/>
              </div>
            )}
            {currentNum === 21 && (
              <div>
                <img src={모모스커피} alt=""/>
              </div>
            )}
            {currentNum === 22 && (
              <div>
                <img src={황제잠수함} alt=""/>
              </div>
            )}
            {currentNum === 23 && (
              <div>
                <img src={올드머그} alt=""/>
              </div>
            )}
          </div>
        )}
        <img src={Select_img} alt="" className="w-[700px] h-[350px]" />
      </div>
    </>
  );
};

export default Map;
