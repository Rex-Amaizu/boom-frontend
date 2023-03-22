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
    category: "category",
    date: "November 22, 2021",
    desc: "Pitch termsheet backing validation focus release.",
    user: "Chandler Bing",
    headerImg: WalkAnimeImg,
    userImg: User1Img,
  },
  {
    category: "category",
    date: "November 22, 2021",
    desc: "Seed round direct mailing non-disclosure agreement graphical user interface rockstar.",
    user: "Rachel Green",
    headerImg: LadyImg,
    userImg: User2Img,
  },
  {
    category: "category",
    date: "November 22, 2021",
    desc: "Beta prototype sales iPad gen-z marketing network effects value proposition",
    user: "Monica Geller",
    headerImg: TrollyImg,
    userImg: User3Img,
  },
];

const blog = () => {
  return (
    <div className={styles.blogContainer}>
      <label>Blog</label>
      <p>Value proposition accelerator product management venture</p>
      <div className={styles.rowDiv}>
        {blogCardData.map((cardItems) => (
          <BlogCard
            category={cardItems.category}
            date={cardItems.date}
            desc={cardItems.desc}
            user={cardItems.user}
            headerImg={cardItems.headerImg}
            userImg={cardItems.userImg}
          />
        ))}
      </div>
      <button>Load more</button>
    </div>
  );
};

export default blog;
