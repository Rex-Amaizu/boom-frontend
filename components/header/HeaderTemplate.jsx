import React from "react";
import Image from "next/image";
import RateCardImg from "../../public/assets/images/boldo/rateCard.svg";
import SquareCardImg from "../../public/assets/images/boldo/squareRateCard.svg";
import RectangularRateCardImg from "../../public/assets/images/boldo/rectangularRateCard.svg";
import PrestoLogoImg from "../../public/assets/images/boldo/prestoLogo.svg";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";
import styles from "../../styles/HeaderTemplate.module.css";
import { useMedia } from "../../hooks/useResponsive";

const imgStyles = { marginBottom: "25px" };

const HeaderTemplate = ({ open }) => {
  const bigTablet = useMedia("(max-width: 970px)");
  const mobile = useMedia("(max-width: 620px)");
  return (
    <div className={styles.hContainer}>
      <div className={styles.mainBody}>
        <div className={styles.leftDiv}>
          <label>Best Trading Investment Platform.</label>
          <p>
            The easiest way to invest in cryptocurrency. No trading skills
            required. Safer, faster and easier than ever before.
          </p>
          <div className={styles.buttonDiv}>
            <div className={styles.template}>
              <button onClick={open}>Get Started</button>
            </div>
            <div className={styles.explore}>
              <button onClick={open}>Login</button>
            </div>
          </div>
        </div>
        <div className={styles.rightDiv}>
          <Image src={RateCardImg} alt="rate card" style={imgStyles} />
          <div className={styles.secondDivRight}>
            {mobile ? null : <Image src={SquareCardImg} alt="SQ rate card" />}
            {mobile ? null : (
              <Image src={RectangularRateCardImg} alt="Rec rate card" />
            )}
          </div>
        </div>
      </div>
      <div className={styles.logoDiv}>
        <Image src={LogoImg} alt="logo" />

        {mobile ? null : <Image src={LogoImg} alt="logo" />}

        {bigTablet ? null : <Image src={LogoImg} alt="logo" />}
      </div>
    </div>
  );
};

export default HeaderTemplate;
