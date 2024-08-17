import React from 'react'
import questions from './Questions.json'
import { Button } from '@/Button/Button'
import styles from './Questions.module.css'

export const Questions = () => {
  return (
    <div className={styles.questions_cont}>
      {questions?.map((obj,index)=><Button key={index} {...obj}/>)}
    </div>
  )
}

