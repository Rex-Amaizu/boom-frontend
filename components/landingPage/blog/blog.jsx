import React from "react";
import BlogCard from "./blogCard";
import WalkAnimeImg from "../../../public/assets/images/blog/walkAnimeBlog.svg";
import User1Img from "../../../public/assets/images/blog/user1.svg";
import LadyImg from "../../../public/assets/images/blog/lady.svg";
import User2Img from "../../../public/assets/images/blog/user2.svg";
import TrollyImg from "../../../public/assets/images/blog/trolly.svg";
import User3Img from "../../../public/assets/images/blog/user3.svg";
import styles from "../../../styles/Blog.module.css";

const blogCardData = [
  {
    category: "Create and verify Boom Trade account",
    desc: "Click on the sign up or get started button to register.",
    headerImg: WalkAnimeImg,
  },
  {
    category: "Make USDT Deposit",
    desc: "Go to deposit, copy the wallet address generated and do your deposit.",
    headerImg: LadyImg,
  },
  {
    category: "System starts trading",
    desc: "The system will trade automatically for you 24/7.",
    headerImg: TrollyImg,
  },
];

const blog = ({ openModal }) => {
  return (
    <div className={styles.blogContainer}>
      <label>How It Works</label>
      <p>
        Take the following steps to start your investment journey with Boom
        Trade
      </p>
      <div className={styles.rowDiv}>
        {blogCardData.map((cardItems) => (
          <BlogCard
            key={cardItems.category}
            category={cardItems.category}
            desc={cardItems.desc}
            headerImg={cardItems.headerImg}
          />
        ))}
      </div>
      <button onClick={openModal}>Get Started</button>
    </div>
  );
};

export default blog;
