import React from "react";
import styles from "../../styles/TableBody.module.css";

const tableBody = ({
  transactionId,
  transactionAmount,
  transactionStatus,
  date,
}) => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.rowDiv}>
        <label>{transactionId}</label>
      </div>
      <div className={styles.rowDiv}>
        <label>{transactionStatus}</label>
      </div>
      <div className={styles.rowDiv}>
        <label>Usdt {transactionAmount}</label>
      </div>
      <div className={styles.rowDiv}>
        <label>{date}</label>
      </div>
    </div>
  );
};

export default tableBody;
