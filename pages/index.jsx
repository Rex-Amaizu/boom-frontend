import React, { useState, useEffect } from "react";
import Header from "../components/header/Header";
import OurServices from "../components/landingPage/OurServices";
import CustomerConnect from "../components/landingPage/customerConnect/customerConnect";
import Footer from "../components/layouts/footer";
import Blog from "../components/landingPage/blog/blog";
import CustomerService from "../components/landingPage/customerService";
import CarouselSection from "../components/landingPage/carouselSection";
import InvestmentPlan from "../components/investmentplan/investmentPlan";
import EnterpriseTemplate from "../components/landingPage/enterpriseTemplate";
import styles from "../styles/index.module.css";
import AuthModal from "../components/auth";

const index = () => {
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };
  return (
    <div className={styles.pageBody}>
      <Header openModal={openModal} />

      <OurServices />
      <CustomerConnect openModal={openModal} />
      <CarouselSection />
      <CustomerService />
      <InvestmentPlan />
      <Blog openModal={openModal} />
      <EnterpriseTemplate />
      <Footer />
      <AuthModal
        // referral={referral}
        open={showModal}
        close={closeModal}
        onSuccess={(email) => {
          localStorage.setItem("emailSaved", JSON.stringify(email));
          setShowModal(false);
          openConfirmModal();
        }}
      />
    </div>
  );
};

export default index;
