import React from "react";
import Image from "next/image";
import styles from "../../../styles/Blog.module.css";

const blogCard = ({ category, date, desc, user, headerImg, userImg }) => {
  return (
    <div className={styles.blogCard}>
      <Image src={headerImg} alt="walk" />
      <label>{category}</label>
      <h6>{desc}</h6>
    </div>
  );
};

export default blogCard;
