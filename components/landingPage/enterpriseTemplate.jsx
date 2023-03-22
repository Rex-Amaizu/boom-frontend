import React from "react";
import styles from "../../styles/EnterpriseTemplate.module.css";

const enterpriseTemplate = () => {
  return (
    <div className={styles.enterpriseContainer}>
      <label>An enterprise template to ramp up your company website</label>
      <div className={styles.rowDiv}>
        <input placeholder="your email address" />
        <button>start now</button>
      </div>
    </div>
  );
};

export default enterpriseTemplate;
