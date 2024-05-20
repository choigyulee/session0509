import React, { useState, useEffect } from "react";
import styles from './App.module.css';

export default function State() {

  const [userName, setUserName] = useState('');
  const [state, setState] = useState({ userName: '' })

  const handleSetUser = () => {
    setState(() => ({ userName }))
  }

  useEffect(() => { }, [state.userName])


  const [likes, setLikes] = useState([]);
  const [item, setItem] = useState('');

  const addLikes = () => {
    setLikes([...likes, item]);
    setItem('');
  };


  return (

    <>
      <div>
        이름: <input type='text' onChange={(e) => setUserName(e.target.value)} />
        <button onClick={handleSetUser}>입력하기</button>
      </div>

      <div className={styles.inputTaste}>
        좋아하는 것: <input value={item} onChange={(e) => setItem(e.target.value)} />
        <button onClick={addLikes}>등록하기</button>
      </div>

      <ul className={styles.tasteList}>
        &nbsp; {state.userName} &nbsp; 님이 좋아하는 건,
        <div className={styles.taste}>
          {likes.map((likes, index) =>
            (<li key={index}>{likes}</li>))}</div>
        이군요.
      </ul>


    </>
  );
}
