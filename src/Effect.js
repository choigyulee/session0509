import React, { useState, useEffect } from "react";
import styles from './App.module.css';

export default function Effect() {

  const [countClap, setCountClap] = useState(0);

  useEffect(() => {
    console.log('응원받았어요');
  });

  return (
    <div className={styles.selfCheerUp}>
      이걸 만든 개린이에게 응원을 보내주세요 &nbsp;
      <button onClick={() => setCountClap(countClap + 1)}> 짝짝짝</button>
    </div>
  );
}
