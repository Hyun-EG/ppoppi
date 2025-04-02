"use client";

import React, { useState } from "react";
import TitleBox from "../common/TitleBox";

const BusWrapper = () => {
  const [searchInputValue, setSearchInputValue] = useState("");
  return (
    <div className="h-full px-2.5 flex flex-col">
      <TitleBox>버스</TitleBox>
      <div className="w-full h-96 p-2.5 flex flex-col bg-white rounded-xl text-black">
        <div className="h-8 flex border-b border-#afafaf">
          <input
            value={searchInputValue}
            onChange={(e) => {
              setSearchInputValue(e.target.value);
            }}
            className="w-2/3 h-7 px-3 outline-0 border border-#afafaf rounded-xl"
            type="text"
          />
          <button className="w-1/3 h-7">검색</button>
        </div>
        <div className="h-8">
          <span className="text-xl">data.busId</span>
        </div>
        <div className="h-6">
          <div>
            <span>data.차량번호</span>
          </div>
        </div>
        <div className="h-6">
          <div>
            <span>data.최종정류소ID</span>
          </div>
        </div>
        <div className="h-6">
          <div>
            <span>data.차량내부혼잡도도</span>
          </div>
        </div>
        <div className="h-6">
          <div>
            <span>data.제공시간</span>
          </div>
        </div>
        <div className="h-6">
          <div>
            <span>data.정류쇼도착여부</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BusWrapper;
