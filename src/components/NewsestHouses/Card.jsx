import React from 'react'
import second from "../../assets/img/backGround.png";
import style from '../../styles/NewsHouses.module.css'
const Card = () => {
  return (
    <div className={  `mx-10  lg:mx-0 bg-main- p-2 cursor-pointer my-3 rounded-[10px] ${style.cardShadow} ` }>
      <img className='h-[200px] w-full obccover rounded-[10px]' src={second} alt="" />
      <h1 className='text-left'>asdsadsdsd</h1>
    </div>
  )
}

export default Card