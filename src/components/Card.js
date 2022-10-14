import React from 'react'

const Card = ({ dataOptions }) => {
  const {icon, title, value} = dataOptions
  
  
  return (
    <div className='dataCard'>
      <i><img src={icon} alt="icon" /></i>
      <p>{title}</p>
      <h3>{value}</h3>
    </div>
  )
}

export default Card