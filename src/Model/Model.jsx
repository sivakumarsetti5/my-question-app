import React, { useContext } from 'react'
import styles from './Model.module.css'
import { appCntxt } from '@/context/appContext'

export const Model = () => {
    const{state,dispatch}= useContext(appCntxt)
    const fnClose = () => {
        dispatch({ type: "CLOSE_MODAL" })
    }
  return (
    <div>
        return (
        <div>
            <div className={styles.mask}></div>
            <div className={`px-3 py-3 ${styles.modalContent}`}>
                <h5 className="mb-5">{state?.question}</h5>
                <div className="text-end">
                    <button className="btn btn-dark" onClick={fnClose} >
                        CLOSE
                    </button>
                </div>
            </div>
        </div>
    );
    </div>
  )
}
