import React from "react";
import Image from "next/image";
import LadyOnPhoneImg from "../../../public/assets/images/customerconnect/ladyOnPhone.svg";
import ConnectPinImg from "../../../public/assets/images/customerconnect/connectPin.svg";
import EyeIconImg from "../../../public/assets/images/customerconnect/eyeIcon.svg";
import SunIconImg from "../../../public/assets/images/customerconnect/sunIcon.svg";
import styles from "../../../styles/CustomerConnect.module.css";

const secondCard = () => {
  return (
    <div className={styles.secondCardContainer}>
      <div className={styles.secondCardRow1}>
        <label>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </label>
        <div className={styles.pinDiv}>
          <Image src={ConnectPinImg} alt="pin" />
          <p>We connect our customers with the best.</p>
        </div>
        <div className={styles.eyeDiv}>
          <Image src={EyeIconImg} alt="eye" />
          <p>Advisor success customer launch party.</p>
        </div>
        <div className={styles.eyeDiv}>
          <Image src={SunIconImg} alt="sun" />
          <p>Business-to-consumer long tail.</p>
        </div>
      </div>
      <div className={styles.secondCardImgDiv}>
        <Image src={LadyOnPhoneImg} alt="lady" />
      </div>
    </div>
  );
};

export default secondCard;
