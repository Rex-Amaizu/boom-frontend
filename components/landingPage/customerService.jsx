import React from "react";
import Image from "next/image";
import WorkSpaceImg from "../../public/assets/images/customerservice/workPlace.svg";
import ArrowDownImg from "../../public/assets/images/customerservice/chevron-down.svg";
import LineImg from "../../public/assets/images/customerservice/serviceLine.svg";
import styles from "../../styles/CustomerService.module.css";

const customerService = () => {
  return (
    <div className={styles.serviceContainer}>
      <Image src={WorkSpaceImg} alt="work space" />
      <div className={styles.secondCol}>
        <label>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </label>
        <div className={styles.secondColRow}>
          <div className={styles.colRow}>
            <p>We connect our customers with the best?</p>
            <Image src={ArrowDownImg} alt="arrow down" />
          </div>
          <div className={styles.lineDiv}>
            <Image src={LineImg} alt="line" />
          </div>
          <div className={styles.colRow2}>
            <p>Android research & development rockstar? </p>
            <Image src={ArrowDownImg} alt="arrow down" />
          </div>
          <div className={styles.lineDiv}>
            <Image src={LineImg} alt="line" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default customerService;
