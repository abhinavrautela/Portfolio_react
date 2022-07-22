import React, { Children } from 'react'

const Button = ({onClick, children}) => {
  return (
    <div>
      <button
        className="text-sm rounded-3xl px-7 py-3 font-medium bg-[#2a8171] hover:bg-[#3cb29c] outline outline-[#2a8171] outline-offset-4"
        onClick={onClick}
      >
        {children}
      </button>
    </div>
  );
}

export default Button