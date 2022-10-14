import React from 'react'

export const Button = ({children, handleClick}) => {
  return (
    <button className='button' onClick={handleClick}> {children} </button>
  )
}

export const SecButton = ({children, handleClick, className}) => {
  return(
    <button className={`sec_btn ${className}`} onClick={handleClick}> {children} </button>
  )
}

