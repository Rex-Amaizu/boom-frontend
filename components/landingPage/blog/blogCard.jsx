import React from "react";
import Image from "next/image";
import styles from "../../../styles/Blog.module.css";

const blogCard = ({ category, date, desc, user, headerImg, userImg }) => {
  return (
    <div className={styles.blogCard}>
      <Image src={headerImg} alt="walk" />
      <div className={styles.category}>
        <label>{category}</label>
        <p>{date}</p>
      </div>
      <h6>{desc}</h6>
      <div className={styles.blogCardUser}>
        <Image src={userImg} alt="user 1" />
        <h4>{user}</h4>
      </div>
    </div>
  );
};

export default blogCard;
