import React, { useEffect, useState } from "react";
import styles from "../../styles/Pay.module.css";
import Image from "next/image";
import scanImg from "../../public/assets/images/boldo/capture.png";
import * as FaIcons from "react-icons/fa";
import SuccessModal from "../layouts/successModal";
import axios from "axios";
import { baseUrl_ } from "../../utils/constants";
import GlobalButton from "../layouts/GlobalButton";

const copyIcon = { color: "#65e4a3", cursor: "pointer" };
const styleIcon = {
  width: "90px",
  height: "90px",
  color: "#65e4a3",
};
const scanStyle = { width: "300px", height: "280px" };

const pay = ({ amount, wallet }) => {
  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [charges, setCharges] = useState();
  const [totalAmount, setTotalAmount] = useState();

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const submit = async (e) => {
    e.preventDefault();

    setClicked(true);

    const userDetails = JSON.parse(localStorage.getItem("dataItems"));
    const url = `${baseUrl_}users/send-mail`;
    const receiverEmail = userDetails.email;

    const payload = {
      subject: "New Deposit",
      message: `A client with email ${receiverEmail} made an investment of ${amount} USDT. Please verify and credit client`,
      receiver: "admin@boomtrade.us",
    };

    try {
      const res = await axios(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });

      if (res.data.status === 200) {
        openModal();
        setClicked(false);
      } else {
        console.log("an error occured");
      }
    } catch (error) {
      console.log(error);
    }

    // setTimeout(() => {
    //   openModal();
    //   setClicked(false);
    // }, 3000);

    // setClicked(true);
    // return;
  };

  useEffect(() => {
    if (amount >= 1000 && amount < 3000) {
      setCharges(parseInt(2));
    }
    if (amount >= 3000 && amount < 10000) {
      setCharges(parseInt(5));
    }
    if (amount >= 10000 && amount < 20000) {
      setCharges(parseInt(10));
    }
    if (amount >= 20000) {
      setCharges(parseInt(100));
    }
    if (amount < 1000) {
      setCharges(parseInt(1));
    }

    setTotalAmount(parseInt(amount) + parseInt(charges));
  }, [amount, charges, totalAmount]);

  return (
    <form onSubmit={submit} className={styles.container}>
      <label>Complete Payment</label>

      <div className={styles.completePay}>
        <div className={styles.headerDiv}>
          <h1>Payment Details</h1>
        </div>

        <div className={styles.amountDiv}>
          <p>
            Send {priceSplitter(totalAmount)} USDT to the address shown at the
            left side below.
          </p>
          {clicked && <div className={styles.loader}></div>}
        </div>
        <div className={styles.addressDiv}>
          <div className={styles.addressDiv1}>
            <h3>Address</h3>
            <Image src={scanImg} alt="scan" style={scanStyle} />
            <div className={styles.copyDiv}>
              <h4>TKe5sTpREPMYbKKfRgJNfoq9s4SgD74MdW</h4>
              <FaIcons.FaCopy
                onClick={() => {
                  navigator.clipboard.writeText(
                    "TKe5sTpREPMYbKKfRgJNfoq9s4SgD74MdW"
                  );
                  alert("address copied");
                }}
                style={copyIcon}
              />
            </div>
          </div>
          <div className={styles.addressDiv2}>
            <h5>Payment Instructions</h5>
            <div className={styles.instructionDiv}>
              <FaIcons.FaExclamationCircle />
              <p>
                Once You have made payment, click the button below to confirm
                payments.
              </p>
            </div>
            <div className={styles.amountSmallDiv}>
              <h1>Amount: </h1>
              <h2>{priceSplitter(amount)} USDT</h2>
            </div>
            <div className={styles.amountSmallDiv}>
              <h1>Charges: </h1>
              <h2>{priceSplitter(charges)} USDT</h2>
            </div>
            <div className={styles.amountSmallDiv}>
              <h1>Total: </h1>
              <h2>{priceSplitter(totalAmount)} USDT</h2>
            </div>
            <p>
              Send {priceSplitter(totalAmount)} USDT by scanning the QR code or
              copy the address shown at the left side.
            </p>

            <div className={styles.buttonDiv}>
              <GlobalButton
                buttonText="Confirm Payment"
                disabledButton="false"
                onClick={openModal}
                fontS="16px"
              />
            </div>
          </div>
        </div>
        <SuccessModal open={showModal} close={closeModal} />
      </div>
    </form>
  );
};

export default pay;
