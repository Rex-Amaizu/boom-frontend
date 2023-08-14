import React from "react";
import styles from "../../styles/InvestmentPlan.module.css";
import InvestmentCard from "./investmentCard";

const investmentPlan = () => {
  return (
    <div className={styles.container}>
      <label>Investment Plan</label>
      <h1>We only have a single investment plan</h1>
      <InvestmentCard />
    </div>
  );
};

export default investmentPlan;
