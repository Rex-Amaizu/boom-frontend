import React from "react";
import Image from "next/image";
import styles from "../../styles/OurServices.module.css";
import WalkAnimeImg from "../../public/assets/images/ourservices/walkAnime.svg";
import HandShakeAnimeImg from "../../public/assets/images/ourservices/handShakeAnime.svg";
import SittingAnimeImg from "../../public/assets/images/ourservices/sittingAnime.svg";
import ArrowRightImg from "../../public/assets/images/ourservices/arrow-right.svg";
import LineImg from "../../public/assets/images/ourservices/line.svg";

const OurServices = () => {
  return (
    <div className={styles.serviceContainer}>
      <label>Our services</label>
      <p>
        Boom Trade is committed to providing profitable arbitrage trading
        services to our teeming investors with integrity using cutting-edge
        technology..
      </p>
      <div className={styles.exploreDiv}>
        <div className={styles.cardDiv}>
          <Image src={WalkAnimeImg} alt="walk" />
          <h6>Investment Friendly</h6>
          <div className={styles.explorePage}>
            <h5>Probably the best investment platform you can trust.</h5>
            <Image src={ArrowRightImg} alt="arrow right" />
          </div>
          <Image src={LineImg} alt="line" />
        </div>
        <div className={styles.cardDiv}>
          <Image src={HandShakeAnimeImg} alt="hand shake" />
          <h6>Trade Operation</h6>
          <div className={styles.explorePage}>
            <h5>Boom Trade runs 24/7 Automated Trading.</h5>
            <Image src={ArrowRightImg} alt="arrow right" />
          </div>
          <Image src={LineImg} alt="line" />
        </div>
        <div className={styles.cardDiv}>
          <Image src={SittingAnimeImg} alt="sitting" />
          <h6>Trading Mode</h6>
          <div className={styles.explorePage}>
            <h5>Uses HFT & Algos to buy digital currencies.</h5>
            <Image src={ArrowRightImg} alt="arrow right" />
          </div>
          <Image src={LineImg} alt="line" />
        </div>
      </div>
    </div>
  );
};

export default OurServices;
