import React, { useState } from "react";
import styles from "../../styles/Invest.module.css";
import { useRouter } from "next/router";
import { useFormik } from "formik";
import GlobalButton from "../layouts/GlobalButton";
import { investSchema } from "../../utils/validations";
import GlobalInput from "../layouts/GlobalInput";

const invest = () => {
  const [walletChoice, setWalletChoice] = useState("");
  const router = useRouter();

  const onSubmit = async (values) => {
    router.push({
      pathname: "/dashboard",
      query: { wallet: walletChoice, amount: values.amount },
    });
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
    validationSchema: investSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit} className={styles.container}>
      <label>Deposit Form</label>
      <div className={styles.mainForm}>
        <h1>Deposit Details</h1>
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
              <GlobalButton buttonText="Deposit" disabledButton="false" />
            ) : (
              <GlobalButton buttonText="Deposit" disabledButton="true" />
            )}
          </div>
        </div>
      </div>
    </form>
  );
};

export default invest;
