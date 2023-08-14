import React from "react";
import styles from "../../styles/Card.module.css";
import * as MdIcons from "react-icons/md";

const styleIcon = { width: "30px", height: "30px" };

const card = ({ labelText, pText, cardImage, descText }) => {
  return (
    <div className={styles.cardWrapper}>
      <div className={styles.priceDiv}>
        <div className={styles.price}>
          <label>{labelText}</label>
          <p>{pText}</p>
        </div>
        {cardImage}
      </div>
      <h1>BOOM TRADE INC</h1>
      <h2>{descText}</h2>
    </div>
  );
};

export default card;
