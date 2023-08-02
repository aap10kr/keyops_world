import React, { useEffect, useState } from "react";
import { diceStyles } from "../styles";

const Dice = ({ diceOneNum }) => {
  const [diceOne, setDiceOne] = useState(diceOneNum >3? diceOneNum-3 : diceOneNum+3);


  useEffect(() => {
      setDiceOne(diceOneNum);
  }, []);

  return (
    <>
      <div className="fixed w-screen h-screen bg-gray-800/50 opacity-70" />
      <div className="w-screen h-screen flex items-center justify-center z-50">
        <div className="relative inline-block top-50">
          <div
            className={`${diceStyles.dice} ${diceStyles.diceOne} show-${diceOne}`}
          >
            <div className={`${diceStyles.side} one`}>
              <div className={`${diceStyles.dot} one-1`}></div>
            </div>
            <div className={`${diceStyles.side} two`}>
              <div className={`${diceStyles.dot} two-1`}></div>
              <div className={`${diceStyles.dot} two-2`}></div>
            </div>
            <div className={`${diceStyles.side} three`}>
              <div className={`${diceStyles.dot} three-1`}></div>
              <div className={`${diceStyles.dot} three-2`}></div>
              <div className={`${diceStyles.dot} three-3`}></div>
            </div>
            <div className={`${diceStyles.side} four`}>
              <div className={`${diceStyles.dot} four-1`}></div>
              <div className={`${diceStyles.dot} four-2`}></div>
              <div className={`${diceStyles.dot} four-3`}></div>
              <div className={`${diceStyles.dot} four-4`}></div>
            </div>
            <div className={`${diceStyles.side} five`}>
              <div className={`${diceStyles.dot} five-1`}></div>
              <div className={`${diceStyles.dot} five-2`}></div>
              <div className={`${diceStyles.dot} five-3`}></div>
              <div className={`${diceStyles.dot} five-4`}></div>
              <div className={`${diceStyles.dot} five-5`}></div>
            </div>
            <div className={`${diceStyles.side} six`}>
              <div className={`${diceStyles.dot} six-1`}></div>
              <div className={`${diceStyles.dot} six-2`}></div>
              <div className={`${diceStyles.dot} six-3`}></div>
              <div className={`${diceStyles.dot} six-4`}></div>
              <div className={`${diceStyles.dot} six-5`}></div>
              <div className={`${diceStyles.dot} six-6`}></div>
            </div>
          </div>
        </div>

      </div>
    </>
  );
};

export default Dice;