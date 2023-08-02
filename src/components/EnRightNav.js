import React from "react";
import "../styles/style.css";
import NavCard from "./NavCard.js";
import {  getStoreMenuEnInfo } from "../imgs/InfoAsset";

const RightNav = ({RightSection}) => {
  const StoreList =  getStoreMenuEnInfo;

  return (
    <div className="flex z-[9999] flex-col gap-4 overflow-auto fixed right-0 h-full bg-[#353535] px-3 py-4 scrollbar-container">
      {/** Card */}
      {StoreList.map( (store) => (
        <div key={store.id} onClick={()=>RightSection(store.id)}>
            <NavCard
              title={store.title}
              category={store.category}
              address={store.address}
            />
        </div>
      ))}
    </div>
  );
};

export default RightNav;