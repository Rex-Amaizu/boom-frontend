import React from "react";
import Image from "next/image";
import DudeOnPhoneImg from "../../../public/assets/images/customerconnect/dudeOnPhone.svg";
import CircleCheckImg from "../../../public/assets/images/customerconnect/circleCheck.svg";
import styles from "../../../styles/CustomerConnect.module.css";

const firstCard = () => {
  return (
    <div className={styles.firstCardContainer}>
      <div className={styles.firstCardImgDiv}>
        <Image src={DudeOnPhoneImg} alt="dude" />
      </div>
      <div className={styles.firstCardRow2}>
        <label>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </label>
        <div className={styles.mainCircleCheckDiv}>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>We connect our customers with the best.</p>
          </div>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>Advisor success customer launch party.</p>
          </div>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>Business-to-consumer long tail.</p>
          </div>
        </div>
        <button>Start now</button>
      </div>
    </div>
  );
};

export default firstCard;
