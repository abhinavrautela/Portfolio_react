import React, { Children } from 'react'

const Button = ({onClick, children, myTheme}) => {
  let themeClass
if (myTheme == "simple"){
themeClass = " px-9 py-2";
}
if (myTheme == "notsimple") {
  themeClass = "  px-7 py-3";
}

  return (
    <div>
      <button
        className={`text-sm rounded-3xl font-medium bg-[#2a8171] hover:bg-[#3cb29c] outline outline-[#2a8171] outline-offset-2 ${themeClass}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button