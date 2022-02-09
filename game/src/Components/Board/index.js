import React from "react";
import styles from "./board.module.css";

export default function Board() {
  return (
    <div className={styles.parent}>
      <div style={{ colour: "red" }} className={styles.box}>
        1
      </div>
      <div className={styles.box}>2</div>
      <div className={styles.box}>3</div>
      <div className={styles.box}>4</div>
      <div className={styles.box}>5</div>
      <div className={styles.box}>6</div>
      <div className={styles.box}>7</div>
      <div className={styles.box}>8</div>
      <div className={styles.box}>9</div>
    </div>
  );
}
