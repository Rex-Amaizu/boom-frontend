import React from "react";
import Image from "next/image";
import DudeOnPhoneImg from "../../../public/assets/images/customerconnect/dudeOnPhone.svg";
import CircleCheckImg from "../../../public/assets/images/customerconnect/circleCheck.svg";
import styles from "../../../styles/CustomerConnect.module.css";

const firstCard = ({ open }) => {
  return (
    <div className={styles.firstCardContainer}>
      <div className={styles.firstCardImgDiv}>
        <Image src={DudeOnPhoneImg} alt="dude" />
      </div>
      <div className={styles.firstCardRow2}>
        <label>
          Boom Trade is a digital currency trading platform that uses
          high-frequency trading and algorithms to automatically buy digital
          currencies at low prices and sell them at higher prices to generate
          returns. As a model focused on digital currencies and high-frequency
          transactions, Boom inc has built a world-class digital exchange that
          has created a topnotch wealth space for investors globally.
        </label>
        <div className={styles.mainCircleCheckDiv}>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>
              Boom Trade Inc is certified as a Limited Liability Company and has
              verifiable good standing certificate.
            </p>
          </div>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>
              Boom Trade is committed to providing profitable arbitrage trading
              services to our teeming investors with integrity using
              cutting-edge technology.
            </p>
          </div>
          <div className={styles.circleCheckDiv}>
            <Image src={CircleCheckImg} alt="circle check" />
            <p>Touching Lives, Helping Nation, Changing the World.</p>
          </div>
        </div>
        <button onClick={open}>Start now</button>
      </div>
    </div>
  );
};

export default firstCard;
