import React from 'react'

const Button = ({className, btnText }) => {
  return (
   <button className={`py-4 px-6 font-medium font-inter text-[18px] rounded-10 ${className}`}>{btnText}</button>
  )
}

export default Button