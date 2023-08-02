import React from "react";
import InstructionImg from "../imgs/Instruction.png";

const Instruction = ({ showFn }) => {
  // 팝업 버튼 false + Instruct state에 따라서 보여지게하자.
  return (
    <>
      <div className="fixed w-screen h-screen" onClick={() => showFn(false)} />
      <div className="w-screen h-screen flex items-center justify-center z-90">
        <img src={InstructionImg} />
      </div>
    </>
  );
};

export default Instruction;
