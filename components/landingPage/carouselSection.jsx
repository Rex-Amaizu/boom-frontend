import React, { useState } from "react";
import Image from "next/image";
import ArrowRightImg from "../../public/assets/images/carouselSection/arrowRight.svg";
import ArrowLeftImg from "../../public/assets/images/carouselSection/arrowLeft.svg";
import User3Img from "../../public/assets/images/carouselSection/user3.svg";
import User2Img from "../../public/assets/images/carouselSection/user2.svg";
import User1Img from "../../public/assets/images/carouselSection/user1.svg";
import styles from "../../styles/CarouselSection.module.css";

const slides = [
  {
    id: 0,
    labelText:
      "This is a realistic program for anyone looking for a website to invest in digital assets.",
    userImg: User1Img,
    userName: "Albus Dumbledore",
    userJob: "Manager @ Howarts",
  },
  {
    id: 1,
    labelText:
      "My family and me want to thank you for helping us find a great opportunity to make money online.",
    userImg: User2Img,
    userName: "Severus Snape",
    userJob: "Director @ Slytherin",
  },
  {
    id: 2,
    labelText:
      "Portfolio doubled in litte over a year. You should not expect anything less. Excellent customer service!.",
    userImg: User3Img,
    userName: "Janice Potter",
    userJob: "Team Leader @ Gryffindor",
  },
];

const carouselSection = () => {
  const [cardIndex, setCardIndex] = useState(slides[1]);
  const [cardLeft, setCardLeft] = useState(slides[0]);
  const [cardRight, setCardRight] = useState(slides[2]);

  const next = () => {
    setCardIndex(slides[cardIndex.id + 1]);
    setCardLeft(slides[cardIndex.id]);
    setCardRight(slides[cardIndex.id + 2]);
    if (cardIndex.id === slides.length - 1) {
      setCardIndex(slides[0]);
      setCardLeft(slides[cardIndex.id]);
      setCardRight(slides[0 + 1]);
    }
    if (cardIndex.id === slides.length - 2) {
      setCardIndex(slides[cardIndex.id + 1]);
      setCardLeft(slides[cardIndex.id]);
      setCardRight(slides[0]);
    }
  };
  const prev = () => {
    setCardIndex(slides[cardIndex.id - 1]);
    setCardLeft(slides[cardIndex.id - 2]);
    setCardRight(slides[cardIndex.id]);
    if (cardIndex.id === 0) {
      setCardIndex(slides[slides.length - 1]);
      setCardLeft(slides[slides.length - 2]);
      setCardRight(slides[0]);
    }
    if (cardIndex.id === 1) {
      setCardIndex(slides[0]);
      setCardLeft(slides[slides.length - 1]);
      setCardRight(slides[1]);
    }
  };
  return (
    <div className={styles.carouselContainer}>
      <label>Testimonials</label>
      <div className={styles.carouselArrows}>
        <Image
          onClick={prev}
          src={ArrowLeftImg}
          alt="arrow left"
          className={styles.arrIm}
        />
        <Image
          onClick={next}
          src={ArrowRightImg}
          alt="arrow right"
          className={styles.arrIm}
        />
      </div>
      <div className={styles.cardDiv}>
        <div key={cardLeft.id} className={styles.cardOne}>
          <label>{cardLeft.labelText}</label>
          <div className={styles.cardOneCol}>
            <Image src={cardLeft.userImg} alt="user 1" />
            <div className={styles.cardOneColRow}>
              <label>{cardLeft.userName}</label>
              <p>{cardLeft.userJob}</p>
            </div>
          </div>
        </div>
        <div key={cardIndex.id} className={styles.cardTwo}>
          <label>“{cardIndex.labelText}”</label>
          <div className={styles.cardTwoCol}>
            <Image src={cardIndex.userImg} alt="user 1" />
            <div className={styles.cardTwoColRow}>
              <label>{cardIndex.userName}</label>
              <p>{cardIndex.userJob}</p>
            </div>
          </div>
        </div>
        <div key={cardRight.id} className={styles.cardThree}>
          <label>“{cardRight.labelText}”</label>
          <div className={styles.cardThreeCol}>
            <Image src={cardRight.userImg} alt="user 3" />
            <div className={styles.cardThreeColRow}>
              <label>{cardRight.userName}</label>
              <p>{cardRight.userJob}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default carouselSection;
