import React, { useState, useEffect } from "react";
import styles from './App.module.css';

export default function Effect() {
const [countClap, setCountClap] = useState(0);
const [hasClapped, setHasClapped] = useState(false); // 버튼이 눌렸는지를 추적하는 상태 변수

useEffect(() => {
if (hasClapped) { // hasClapped가 true일 때만 콘솔 출력
console.log('응원받았어요');
}
}, [countClap]); // countClap이 변경될 때마다 useEffect 실행

const handleClick = () => {
setCountClap(countClap + 1);
setHasClapped(true); // 버튼이 눌리면 hasClapped를 true로 설정
};

return (
<div className={styles.selfCheerUp}>
이걸 만든 개린이에게 응원을 보내주세요  
<button onClick={handleClick}> 짝짝짝</button>
</div>
);
}