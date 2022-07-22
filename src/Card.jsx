import React from 'react'
import { IconContext } from 'react-icons/lib';
const Card = ({children, myTheme}) => {
    let themeClass = "border-b-4 hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass = "w-[50%]"
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171" }}>
        <div
          className={`p-7 bg-[#1e1b1b]  space-y-3 snap-always snap-center ${themeClass}`}
        >
          {children}
        </div>
      </IconContext.Provider>
    </>
  );
}

export default Card