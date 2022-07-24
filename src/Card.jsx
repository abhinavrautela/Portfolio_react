import React from 'react'
import { IconContext } from 'react-icons/lib';
import { Scrollbars } from "react-custom-scrollbars-2";
const Card = ({children, myTheme}) => {
    let themeClass =
      "mb-5 sm:mb-0 sm:border-b-4 w-full justify-center items-center sm:w-[30%] sm:border-b-[#1e1b1b] hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass = "sm:w-[50%] ";
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171" }}>
       
          <div
            className={`p-4 sm:p-10 bg-[#1e1b1b]  rounded-md flex sm:flex-col  space-y-3  shadow-lg shadow-[#030202] sm:shadow-[#0f0d0d] ${themeClass}`}
          >
            {children}
          </div>
        
      </IconContext.Provider>
    </>
  );
}

export default Card