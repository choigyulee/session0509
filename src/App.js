import React from "react";
import styles from './App.module.css';
import State from './State';
import Effect from './Effect';


export default function App() {

  return (
    <>
      <h1 className={styles.title}>당신이 궁금해요</h1>
      <State />
      <Effect />
    </>
  );
}
