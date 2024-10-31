import React, { useState, useEffect } from 'react';

function Letreiro() {
  const text = "Venha estudar na Fatec";
  const [displayText, setDisplayText] = useState("");
  const [elapsedTime, setElapsedTime] = useState(0);

  useEffect(() => {
    let index = 0;
    const startTime = Date.now(); 
    const interval = setInterval(() => {
      setDisplayText(text.substring(0, index + 1));
      index++;

      if (index === text.length) {
        clearInterval(interval);
        setElapsedTime(Date.now() - startTime); 
      }
    }, 150);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <h2>{displayText}</h2>
      {elapsedTime > 0 && <p>Tempo total: {elapsedTime} ms</p>}
    </>
  );
}

export default Letreiro;



