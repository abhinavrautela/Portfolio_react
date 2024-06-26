import React from 'react'
import { IconContext } from 'react-icons/lib';
const Card = ({children, myTheme}) => {
    let themeClass =
      "mb-5 min-w-[45%] h-36 sm:min-w-[11%] sm:mb-0 flex flex-col rounded-full  ml-2 sm:border-b-4 justify-center items-center  sm:border-b-[#1a1717] hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass =
          "min-w-[95%] px-7 py-4 rounded-2xl sm:min-w-[55%] ";
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171", }}>
          <div
            className={`bg-[#1a1717] shadow-lg shadow-[#030202] sm:shadow-[#0f0d0d] ${themeClass}`}
          >
            {children}
          </div>
     </IconContext.Provider>
    </>
  );
}

export default Card