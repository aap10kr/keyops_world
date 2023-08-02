import React from "react";

const NavCard = ({ title, category, address }) => {
  return (
    <div className="flex flex-col  h-[77px] py-3 px-4  outline outline-1 hover:cursor-pointer outline-red-500 rounded-md">
      <div className="font-bold text-white text-sm">{title}</div>
      <div className="text-[#F8F8F8] opacity-50 font-extralight text-[10px]">
        {category}
      </div>
      <div className="flex gap-2 mt-1 text-white text-[10px]">
        <div>{address}</div>
      </div>
    </div>
  );
};

export default NavCard;
