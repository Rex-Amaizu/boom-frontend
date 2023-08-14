import React from "react";
import styles from "../../styles/Table.module.css";

const table = () => {
  return (
    <div className={styles.tableWrapper}>
      <div className={styles.rowDiv}>
        <label>#</label>
      </div>
      <div className={styles.rowDiv}>
        <label>Status</label>
      </div>
      <div className={styles.rowDiv}>
        <label>Amount</label>
      </div>
      <div className={styles.rowDiv}>
        <label>Date</label>
      </div>
    </div>
  );
};

export default table;
