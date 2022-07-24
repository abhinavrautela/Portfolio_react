import React from 'react'
import { IconContext } from 'react-icons/lib';
const Card = ({children, myTheme}) => {
    let themeClass =
      "border-b-4 w-[70%] sm:w-[30%] items-center border-b-[#1e1b1b] hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass = "w-[50%]"
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171" }}>
        <div
          className={`p-10 bg-[#1e1b1b] flex flex-col  space-y-3  shadow-lg shadow-[#0f0d0d] ${themeClass}`}
        >
          {children}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Card