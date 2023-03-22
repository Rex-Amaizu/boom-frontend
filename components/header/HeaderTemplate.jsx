import React from "react";
import Image from "next/image";
import RateCardImg from "../../public/assets/images/boldo/rateCard.svg";
import SquareCardImg from "../../public/assets/images/boldo/SquareRateCard.svg";
import RectangularRateCardImg from "../../public/assets/images/boldo/rectangularRateCard.svg";
import PrestoLogoImg from "../../public/assets/images/boldo/prestoLogo.svg";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";
import styles from "../../styles/HeaderTemplate.module.css";

const imgStyles = { marginBottom: "25px" };

const HeaderTemplate = () => {
  return (
    <div className={styles.hContainer}>
      <div className={styles.mainBody}>
        <div className={styles.leftDiv}>
          <label>Save time by building fast with Boldo Template </label>
          <p>
            Funding handshake buyer business-to-business metrics iPad
            partnership. First mover advantage innovator success deployment
            non-disclosure.
          </p>
          <div className={styles.buttonDiv}>
            <div className={styles.template}>
              <button>Buy template</button>
            </div>
            <div className={styles.explore}>
              <button>Explore</button>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <Image src={RateCardImg} alt="rate card" style={imgStyles} />
          <div className={styles.secondDivRight}>
            <Image src={SquareCardImg} alt="SQ rate card" />
            <Image src={RectangularRateCardImg} alt="Rec rate card" />
          </div>
        </div>
      </div>
      <div className={styles.logoDiv}>
        <Image src={LogoImg} alt="logo" />
        <Image src={PrestoLogoImg} alt="presto rate card" />
        <Image src={LogoImg} alt="logo" />
        <Image src={PrestoLogoImg} alt="presto rate card" />
        <Image src={LogoImg} alt="logo" />
        <Image src={PrestoLogoImg} alt="presto rate card" />
      </div>
    </div>
  );
};

export default HeaderTemplate;
