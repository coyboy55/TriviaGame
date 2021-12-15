import React, { useState, useEffect } from "react";
import SessionContext from "./SessionContext";

export default function SessionProvider({ children }) {
  const [question, setQuestion] = useState(1);
  const [points, setPoints] = useState(0);
  const [timer, setTimer] = useState(15);
  const [ammount, setAmmount] = useState(10);
  const [difficult, setDifficult] = useState("medium");


  useEffect(() => {}, []);

  let context = {
    question,
    timer,
    points,
    actions: {
      setAmmount,
      setDifficult,
      setAmmount,
      setPoints,
      setTimer,
      setQuestion,
    },
    ammount,
    difficult,
  };

  return (
    <SessionContext.Provider value={context}>
      {children}
    </SessionContext.Provider>
  );
}
