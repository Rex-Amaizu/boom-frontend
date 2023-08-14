import React from "react";
import styles from "../../styles/EnterpriseTemplate.module.css";

const enterpriseTemplate = () => {
  return (
    <div className={styles.enterpriseContainer}>
      <label>Get In Touch</label>
      <div className={styles.rowDiv}>
        <input placeholder="Full Name" />
        <input placeholder="Email Address" />
      </div>
      <div className={styles.rowDiv}>
        <input placeholder="Phone Number" />
        <input placeholder="Subject" />
      </div>
      <div className={styles.msgDiv}>
        <input placeholder="Message" />
      </div>
      <button>Send</button>
    </div>
  );
};

export default enterpriseTemplate;
