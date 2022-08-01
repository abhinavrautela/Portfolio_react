import React from 'react'
import { IconContext } from 'react-icons/lib';
const Card = ({children, myTheme}) => {
    let themeClass =
      "mb-5 min-w-[45%] h-36 sm:min-w-[11%] sm:mb-0 flex flex-col rounded-full  sm:border-b-4  justify-center items-center  sm:border-b-[#1e1b1b] hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass = "min-w-[95%] rounded-md sm:min-w-[55%] ";
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171", }}>
          <div
            className={`bg-[#1e1b1b] space-y-3 shadow-lg shadow-[#030202] sm:shadow-[#0f0d0d] ${themeClass}`}
          >
            {children}
          </div>
     </IconContext.Provider>
    </>
  );
}

export default Card