"use client";
import React, { useEffect, useState } from "react";
import { Button } from "@/Button/Button";
import styles from "./Questions.module.css";
import axios from 'axios'

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
      const res = await axios.get("http://localhost:2025/question/get-data");
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
    <div className={styles.questions_cont}>
      {data?.map((obj, index) => (
        <Button key={index} {...obj} />
      ))}
    </div>
  );
};
