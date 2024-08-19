"use client"

import React, { useContext, useState } from 'react'
import styles from './Button.module.css'
import Image from 'next/image'
import { appCntxt } from '@/context/appContext'
export const Button = ({id,question}) => {
  const{dispatch} = useContext(appCntxt)
  const[isShowMask,setIsShowMask] = useState(true)
  const handleClick = () =>{
    setIsShowMask(false)
  }
  const handleEyeClick = (event,question)=>{
    event.stopPropagation()
    dispatch({type:'QUESTION',payload:question})
  }

  return (
    <div className={styles.btn_container} onClick={handleClick}>
      {id}
      <Image src='/eye.png' height={30} width={30} alt='eye icon' onClick={(event)=>handleEyeClick(event,question)}/>
      {isShowMask && <div className={styles.mask}></div>}
    </div>
  )
}

