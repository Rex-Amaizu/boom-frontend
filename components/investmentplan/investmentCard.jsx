import React from "react";
import styles from "../../styles/InvestmentPlan.module.css";
import { BsCheck2 } from "react-icons/bs";

const iconStyles = { width: "25px", height: "25px", color: "#00b386" };

const investmentCard = () => {
  return (
    <div className={styles.cardContainer}>
      <label>Funds below $20 will be lost.</label>
      <h6>68.9% Monthly ROI Which Grows as the Community Grows</h6>
      <div className={styles.roiDiv}>
        <h5>$20</h5>
        <h4>Minimum</h4>
      </div>
      <button>Invest Now</button>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>100% Proof of Liquidity Pool</p>
      </div>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>100% Smart Contract Protocol</p>
      </div>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>Runs on ASI, HFT, & Microchips</p>
      </div>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>5% Direct Referral Commission</p>
      </div>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>No Withdrawal Charges</p>
      </div>
      <div className={styles.plans}>
        <BsCheck2 style={iconStyles} />
        <p>24/7 Customer Support</p>
      </div>
    </div>
  );
};

export default investmentCard;
