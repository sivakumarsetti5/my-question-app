"use client"
import React, { useEffect, useState } from 'react'
import questions from './Questions.json'
import { Button } from '@/Button/Button'
import styles from './Questions.module.css'

export const Questions = () => {
  const[data,setData] = useState([])

  function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
} 
  useEffect(()=>{
    setData(shuffle(questions))
  },[])
  
  return (
    <div className={styles.questions_cont}>
      {data?.map((obj,index)=><Button key={index} {...obj}/>)}
    </div>
  )
}

