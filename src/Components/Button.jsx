import React from 'react'

function Button({msg, className=""}) {
  return (
    <div>
      <button
      className={`${className} bg-[#E6511A]  `}
      >{msg}</button>
    </div>
  )
}

export default Button 