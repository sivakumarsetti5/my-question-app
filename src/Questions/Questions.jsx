"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/Button/Button";
import styles from "./Questions.module.css";
import axios from 'axios'
import Link from "next/link";

export const Questions = () => {
  const [data, setData] = useState([]);
  const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

  const getQuestionsFromDb = async () => {
    try {
      const res = await axios.get("http://localhost:2024/que/get-ques");
      setData(shuffleArray(res?.data));
    } catch (ex) {
      setData([]);
    } finally {
    }
  };

  useEffect(() => {
    getQuestionsFromDb();
  }, []);
  return (
    <div>
         <Link href='/addQuestions' target="blank"> Add questions to the dashboard</Link>
         <div className={styles.questions_cont}>
          {data?.map((obj, index) => (
            <Button key={index} {...obj} />
          ))}
         </div>
    </div>
    
  );
};
