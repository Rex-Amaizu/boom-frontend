import React from "react";
import Image from "next/image";
import FirstCard from "./firstCard";
import SecondCard from "./secondCard";
import styles from "../../../styles/CustomerConnect.module.css";

const customerConnect = () => {
  return (
    <div className={styles.connectContainer}>
      <FirstCard />
      <SecondCard />
    </div>
  );
};

export default customerConnect;
