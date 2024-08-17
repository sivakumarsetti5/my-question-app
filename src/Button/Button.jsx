import React from 'react'
import styles from './Button.module.css'

export const Button = ({id,question}) => {
  return (
    <div className={styles.btn_container}>
      {id}{question}
    </div>
  )
}

