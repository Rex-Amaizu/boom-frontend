import React from "react";
import Header from "../components/header/Header";
import OurServices from "../components/landingPage/OurServices";
import CustomerConnect from "../components/landingPage/customerConnect/customerConnect";
import Footer from "../components/layouts/footer";
import Blog from "../components/landingPage/blog/blog";
import CustomerService from "../components/landingPage/customerService";
import CarouselSection from "../components/landingPage/carouselSection";
import EnterpriseTemplate from "..//components/landingPage/enterpriseTemplate";
import styles from "../styles/index.module.css";

const index = () => {
  return (
    <div className={styles.pageBody}>
      <Header />

      <OurServices />
      <CustomerConnect />
      <CarouselSection />
      <CustomerService />
      <Blog />
      <EnterpriseTemplate />
      <Footer />
    </div>
  );
};

export default index;
