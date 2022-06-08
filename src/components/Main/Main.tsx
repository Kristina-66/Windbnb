import React from "react";
import styles from "../Main/main.module.css";
import jsonData from "../../data/stays.json";
import { IApart } from "../../types/types";
import ApartList from "./ApartList/ApartList";

function Main() {
  const aparts: IApart[] = [...jsonData];
  return (
    <div className={styles.mainText}>
      <p className={styles.title}>Stays in Finland</p>
      <p className={styles.num_stays}>12+ stays</p>
      <div className={styles.main}></div>
      <ApartList aparts={aparts} />
    </div>
  );
}

export default Main;
