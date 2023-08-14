import React, { useState } from "react";
import styles from "../../styles/Withdraw.module.css";
import GlobalInput from "../layouts/GlobalInput";
import { useFormik } from "formik";
import { withdrawalSchema } from "../../utils/validations";
import GlobalButton from "../layouts/GlobalButton";
import axios from "axios";
import { baseUrl_ } from "../../utils/constants";

const withdraw = () => {
  const [walletChoice, setWalletChoice] = useState("");

  const [clicked, setClicked] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async (values) => {
    // e.preventDefault();

    setClicked(true);
    const amount = values.amount;
    const userDetails = JSON.parse(localStorage.getItem("dataItems"));
    const url = `${baseUrl_}users/send-mail`;
    const receiverEmail = userDetails.email;
    const wallet = userDetails.accountDetails[0].walletAddress;

    const payload = {
      subject: "Withdrawal Request",
      message: `A client with email ${receiverEmail} made a withdrawal request of ${amount} USDT to be transferred to his UDST wallet address  ${wallet}. Please verify and pay out client`,
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
  };

  const openModal = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const {
    values,
    errors,
    touched,
    handleBlur,
    handleChange,
    handleSubmit,
    setFieldValue,
  } = useFormik({
    initialValues: {
      wallet: "",
      amount: "",
    },
    validationSchema: withdrawalSchema,
    onSubmit,
  });
  return (
    <>
      {clicked && (
        <div className="w-full flex items-center justify-center h-auto">
          <div className={styles.loader}></div>
        </div>
      )}
      <form onSubmit={handleSubmit} className={styles.container}>
        <label>Withdrawal Form</label>
        <div className={styles.mainForm}>
          <h1>Withdrawal Details</h1>
          <div className={styles.lineDiv}></div>

          <div className={styles.mainFormBody}>
            <h2>Choose Wallet</h2>

            <select
              name="wallet"
              id="wallet"
              value={walletChoice}
              className={styles.selectDiv}
              onChange={(e) => {
                setWalletChoice(e.target.value);
              }}
            >
              <option value="" disabled selected>
                Select wallet
              </option>
              <option value="usdt">USDT</option>
            </select>
            <h2>Choose Amount</h2>
            <div className={styles.inputDiv}>
              <GlobalInput
                borderBottom="2px solid #bfbfbf"
                borderTop="2px solid #bfbfbf"
                borderLeft="2px solid #bfbfbf"
                borderRight="2px solid #bfbfbf"
                labelFontWeight="500px"
                labelFontSize="16px"
                type="number"
                handleBlurInput={handleBlur}
                handleChangeInput={handleChange}
                inputValue={values.amount}
                inputName="amount"
              />
            </div>
            <div className={styles.buttonDiv}>
              {!errors.amount && values.amount ? (
                <GlobalButton buttonText="Withdraw" disabledButton="false" />
              ) : (
                <GlobalButton buttonText="Withdraw" disabledButton="true" />
              )}
            </div>
          </div>
        </div>
      </form>
    </>
  );
};

export default withdraw;
