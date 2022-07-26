import React from 'react'
import { IconContext } from 'react-icons/lib';
const Card = ({children, myTheme}) => {
    let themeClass =
      "mb-5 sm:mb-0 flex sm:flex-col rounded-full  sm:border-b-4 w-full justify-center items-center sm:w-[30%] sm:border-b-[#1e1b1b] hover:border-b-[#2a8171]";
    if (myTheme == "notask"){
        themeClass = " block min-w-[95%] rounded-md sm:min-w-[55%] ";
    }
  return (
    <>
      <IconContext.Provider value={{ color: "#2a8171", }}>
          <div
            className={`p-4 sm:p-10 bg-[#1e1b1b] space-y-3 shadow-lg shadow-[#030202] sm:shadow-[#0f0d0d] ${themeClass}`}
          >
            {children}
          </div>
     </IconContext.Provider>
    </>
  );
}

export default Card