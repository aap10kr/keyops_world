import React, { useEffect, useState } from "react";

const Loading = () => {
  const [count, setCount] = useState(0);
  const [style, setStyle] = useState({ width: "0%" });

  const duration = 3000;

  useEffect(() => {
    const startTime = Date.now();
    const interval = setInterval(() => {
      const elapsedTime = Date.now() - startTime;
      if (elapsedTime >= duration) {
        clearInterval(interval);
        setCount(100);
        setStyle({
          width: "100%",
        });
      } else {
        const progress = Math.floor((elapsedTime / duration) * 100);
        setCount(progress);
        setStyle({
          width: progress + "%",
        });
      }
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-[#222222]">
      <div className="w-3/4 h-20 flex flex-col gap-8">
        <div className="w-full text-center">
          <div className="text-white text-lg font-semibold">
            로딩중입니다. 잠시만 기다려주세요.
          </div>
        </div>
        <div className="flex w-full gap-4 items-center">
          <div className=" w-full h-9 bg-[#969696] rounded-3xl shadow-custom  p-2">
            <div className="h-full bg-red-500 rounded-2xl" style={style}></div>
          </div>
          <div className="text-[#C1C1C1] w-[50px] font-medium">{count}%</div>
        </div>
      </div>
    </div>
  );
};

export default Loading;
