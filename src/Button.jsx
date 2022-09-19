import React from 'react'

const Button = ({onClick, children, myTheme}) => {
  console.log("myTheme", myTheme);
  let themeClass
if (myTheme == "simple"){
themeClass = " px-9 py-2 outline-[#2a8171]";
}
if (myTheme == "notsimple") {
  themeClass = "  px-7 py-3 outline-[#2a8171]";
}

if (myTheme == "messageTrue") {
  themeClass = " outline-[#37a703]";
}
if (myTheme == "messageFalse"){
  themeClass = " outline-[#c70505]";
}
  return (
    <div>
      <button
        type="submit"
        className={`text-xs sm:text-sm rounded-3xl font-medium tracking-tighter px-9 py-2  bg-[#2a8171] hover:bg-[#3cb29c] outline  outline-offset-2  ${themeClass}`}
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button