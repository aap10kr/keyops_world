import { useState } from "react";
import { Link } from 'react-router-dom';


import LoadingPage from "../components/loading.js";


import Select_img from '../imgs/map_img.png';
import nextBtn from '../imgs/nextBtn.png';
import CloseBtn from '../imgs/closeBtn.png';
import HomeBtn from '../imgs/home.png';
import GameBtn from '../imgs/game.png';
import Touch from '../imgs/firstTouch.png'

//markerlayer
import 거대갈비 from '../imgs/거대갈비.png'
import 융캉찌에 from '../imgs/융캉찌에.png'
import 담윤 from '../imgs/담윤.png'
import 이가네막국수 from '../imgs/이가네막국수.png'
import 삼진어묵 from '../imgs/삼진어묵.png'
import 상국이네 from '../imgs/상국이네.png'
import 밀락더마켓 from '../imgs/밀락더마켓.png'
import 인디고서원 from '../imgs/인디고서원.png'
import 굿올데이즈 from '../imgs/굿올데이즈.png'
import 거대곰탕 from '../imgs/거대곰탕.png'
import 원당돈까스 from '../imgs/원당돈가스.png'
import 우나이찌 from '../imgs/우나이찌.png'
import 황제잠수함 from '../imgs/황제잠수함.png'
import 카페051 from '../imgs/카페051.png'
import 모모스커피 from '../imgs/모모스커피.png'
import 올드머그 from '../imgs/올드머그.png'

import StoreInfo from "../pages/StoreInfo";


const Map = () => {

    const [istouch, setIsTouch] = useState(true);
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [isPopupOpen2, setIsPopupOpen2] = useState(false);
    const [homeButton, setHomeButton] = useState(true);
    const [isLoding, setIsLoding] = useState(false);
    const [clicknum, setClicknum] = useState(0);
    const [playSection, setPlaySection] = useState(false);

    const [showVideo, setShowVideo] = useState(false);

    const [buttonScore, setButtonscore] = useState(false);
    const [buttonGroup, setButtonGroup] = useState(false);

    const [diceNum , setDiceNum ] = useState(0);
    const [currentNum , setCurrentNum ] = useState(0);
    const [playCount , setPlayCount ] = useState(8);

    function TouchPopup(){
        setIsTouch(false);
        setIsPopupOpen(true);
    }
    
    function closePopup() {
        setIsPopupOpen(false);
        setIsPopupOpen2(true);
    }

    function closePopup2() {
        setIsPopupOpen2(false);
        setIsLoding(true)
        setHomeButton(false)
        setTimeout(() => {
            setIsLoding(false);
            setHomeButton(true);
            setButtonGroup(true);
            setButtonscore(true);
        }, 1000);

    }
    function playButon(num){
        setTimeout(() => {
            setButtonGroup(false);
            setPlaySection(true);
            setHomeButton(false);
        }, 1000);
        setClicknum(num)
    }

    function DicePlay(){
        const randomNum = Math.floor(Math.random() * 12) + 1;
    
        setDiceNum(randomNum);
        const newCurrentNum = currentNum + randomNum;
    
        if (newCurrentNum > 16) {
            setCurrentNum(newCurrentNum - 16);
            setTimeout(() => {
                playButon(newCurrentNum);
                setButtonscore(false)
            }, 4000);
        } else {
            setCurrentNum(newCurrentNum);
            setTimeout(() => {
                playButon(newCurrentNum);
                setButtonscore(false)
            }, 4000);
        }

        if(playCount == 0){
            setPlayCount(false)
        }
    }

    function HandleButton(){
        setPlaySection(false);
        setButtonGroup(true);
        setHomeButton(true);
        setPlayCount(playCount - 1);
        setButtonscore(true)
    }

    //currentNum

    return (
        <>
            <div className="absolute w-screen h-screen">
                {istouch &&
                    <div className="z-50 w-screen h-screen flex justify-center items-center bg-gray-600/50" onClick={()=>TouchPopup()}>
                        <img src={Touch} alt="" />
                    </div>
                }
                {homeButton &&
                    <div className="absolute w-full flex justify-between px-10 mt-6 z-50">
                        <button>
                            <Link to="/">
                                <img src={HomeBtn} alt=""/>
                            </Link>
                        </button>
                        <button>
                            <a href="https://keyops.gabia.io/">
                                <img src={GameBtn} alt=""/>
                            </a>
                        </button>
                    </div>
                }
                {isPopupOpen && 
                    <div className="z-50 w-screen h-screen bg-gray-600/50">
                        <div className="fixed flex bottom-6 right-6">
                            <button onClick={()=>closePopup()} className="relative flex bottom-0 right-0">
                                <img src={nextBtn} alt="" />
                            </button>
                        </div>
                    </div>
                }
                {isPopupOpen2 && 
                    <div className="z-50 w-screen h-screen bg-gray-600/50">
                        <div className="fixed flex bottom-6 right-6">
                            <button onClick={()=>closePopup2()} className="relative flex bottom-0 right-0">
                                <img src={CloseBtn} alt="" />
                            </button>
                        </div>
                    </div>
                }
                {isLoding && 
                    <LoadingPage/>
                } 
                {playSection && !showVideo &&
                    <StoreInfo storeNum={clicknum} fn={HandleButton}/>
                }
            </div>
            <div className='z-30 w-screen h-screen flex justify-center items-center bg-[#9C9C9C]'>
                {buttonScore &&
                    <div className="absolute z-20 bottom-4 left-[2rem]">
                        <button className="bg-white rounded-lg flex justify-center items-center a" onClick={()=>DicePlay()}  disabled={playCount <= 0}>
                            <div className="px-2.5 py-0.5">
                                <span className="text-xs font-semibold tracking-tighter">현재 잔여횟수</span>
                                <div className="flex justify-center items-center relative top-[-4px]">
                                    <div className="text-pink-600 font-bold">{playCount}</div>
                                    <div className="font-bold px-1.5">/</div>
                                    <div className="font-bold">8</div>
                                </div>
                            </div>
                        </button>
                    </div>
                }
                {buttonGroup &&
                    <div className="absolute z-10">
                        { currentNum === 1 && <div><img src={거대갈비} alt=""/></div> }
                        { currentNum === 2 && <div><img src={융캉찌에} alt=""/></div> }
                        { currentNum === 3 && <div><img src={담윤} alt=""/></div> }
                        { currentNum === 4 && <div><img src={이가네막국수} alt=""/></div> }
                        { currentNum === 5 && <div><img src={삼진어묵} alt=""/></div> }
                        { currentNum === 6 && <div><img src={상국이네} alt=""/></div> }
                        { currentNum === 7 && <div><img src={밀락더마켓} alt=""/></div> }
                        { currentNum === 8 && <div><img src={인디고서원} alt=""/></div> }
                        { currentNum === 9 && <div><img src={굿올데이즈} alt=""/></div> }
                        { currentNum === 10 && <div><img src={거대곰탕} alt=""/></div> }
                        { currentNum === 11 && <div><img src={원당돈까스} alt=""/></div> }
                        { currentNum === 12 && <div><img src={우나이찌} alt=""/></div> }
                        { currentNum === 13 && <div><img src={황제잠수함} alt=""/></div> }
                        { currentNum === 14 && <div><img src={카페051} alt=""/></div> }
                        { currentNum === 15 && <div><img src={모모스커피} alt=""/></div> }
                        { currentNum === 16 && <div><img src={올드머그} alt=""/></div> }
                    </div>
                }
                <img src={Select_img} alt='' className="w-[700px] h-[350px]"/>
            </div>
        </>
    );
}

export default Map;