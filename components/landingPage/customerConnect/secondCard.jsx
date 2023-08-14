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
        <div className={styles.algoDiv}>
          <label>ALGO AND HFT</label>
          <div className={styles.firstAlgoDiv}>
            <h2>What is ALGO?</h2>
            <p>
              Algorithmic trading (also called automated trading, black-box
              trading, or algo-trading) uses a computer program that follows a
              defined set of instructions (an algorithm) to place a trade. The
              trade, in theory, can generate profits at a speed and frequency
              that is impossible for a human trader.
            </p>
          </div>
          <div className={styles.secondAlgoDiv}>
            <h2>What is HFT?</h2>
            <p>
              High-frequency trading, also known as HFT, is a method of trading
              that uses powerful computer programs to transact a large number of
              orders in fractions of a second. It uses complex algorithms to
              analyze multiple markets and execute orders based on market
              conditions.
            </p>
          </div>
        </div>
        {/* <label>
          We connect our customers with the best, and help them keep up-and stay
          open.
        </label> */}
        <div className={styles.pinDiv}>
          <Image src={ConnectPinImg} alt="pin" />
          <p>We connect our customers with the best trade algorithm.</p>
        </div>
        <div className={styles.eyeDiv}>
          <Image src={EyeIconImg} alt="eye" />
          <p>Advisor to ensure customer success.</p>
        </div>
        <div className={styles.eyeDiv}>
          <Image src={SunIconImg} alt="sun" />
          <p>Business-to-consumer Friendly platform.</p>
        </div>
      </div>
      <div className={styles.secondCardImgDiv}>
        <Image src={LadyOnPhoneImg} alt="lady" />
      </div>
    </div>
  );
};

export default secondCard;
