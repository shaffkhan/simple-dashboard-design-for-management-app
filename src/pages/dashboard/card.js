import React from 'react'
import money from "./../../assets/icons/money.png"
import plus from "./../../assets/icons/plus.png"
const Card = ({cardData}) => {
 
  return (
    <div className='leading-[2] h-[150px] w-[350px] bg-white rounded-[10px] px-[15px] py-[10px] shadow-2xl grow'>
      <p className='font-medium'>{cardData.name}</p>

      <div className='flex gap-3 items-center'>
      <img src={money} alt="money icon" className='h-[40px] w-[40px]' />
      <img src={plus}  className='h-[30px] w-[30px]' />
      <h2 className='text-[50px] font-semibold'>{cardData.amount}</h2>
      </div>

    </div>
  )
}

export default Card
