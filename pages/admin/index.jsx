import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import styles from "../../styles/Admin.module.css";
import { useFormik } from "formik";
import { adminSchema } from "../../utils/validations";
import { baseUrl_ } from "../../utils/constants";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as BiIcons from "react-icons/bi";

const styleIcon = { color: "#65e4a3", width: "30px", height: "30px" };

const index = () => {
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const admin = JSON.parse(localStorage.getItem("admin"));
    if (admin !== "admin001") {
      router.push("/");
    }
  }, []);

  const onSubmit = async (values) => {
    setIsLoading(true);
    const payload = {
      email: values.email,
      amount: values.amount,
      status: values.status,
    };

    const dataLoad = {
      email: values.email,
      amount: values.amount,
    };

    const depositUrl = `${baseUrl_}users/deposit`;
    const withdrawalUrl = `${baseUrl_}users/withdraw`;
    const mailUrl = `${baseUrl_}users/send-mail`;

    console.log("dl", depositUrl);
    console.log("wl", withdrawalUrl);

    if (payload.status === "Deposit") {
      try {
        const res = await axios(depositUrl, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: dataLoad,
        });

        const depositAmount = values.amount;
        const depositMail = values.email;

        if (res.data.status === 200) {
          toast(res.data.message);
          setIsLoading(false);

          const depositMailPayload = {
            subject: "Investment Updated",
            message: `Hello, your BoomTrade account has been credited ${depositAmount} USDT and your investment activated. Please contact support@boomtrade.us for further enquiries`,
            receiver: depositMail,
          };

          try {
            const res = await axios(mailUrl, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              data: depositMailPayload,
            });

            if (res.data.status === 200) {
              console.log(res.data.message);
            } else {
              console.log("an error occured");
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          toast(res.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        toast(error.response.data);
      }
    }

    if (payload.status === "Withdrawal") {
      try {
        const res = await axios(withdrawalUrl, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
          },
          data: dataLoad,
        });

        const withdrawalAmount = values.amount;
        const withdrawalMail = values.email;

        if (res.data.status === 200) {
          toast(res.data.message);
          setIsLoading(false);

          const withdrawalMailPayload = {
            subject: "WITHDRAWAL",
            message: `Hello, your BoomTrade account has been debited ${withdrawalAmount} USDT and your wallet has been credited. Please contact support@boomtrade.us for further enquiries`,
            receiver: withdrawalMail,
          };

          try {
            const res = await axios(mailUrl, {
              method: "post",
              headers: {
                "Content-Type": "application/json",
              },
              data: withdrawalMailPayload,
            });

            if (res.data.status === 200) {
              console.log(res.data.message);
            } else {
              console.log("an error occured");
            }
          } catch (error) {
            console.log(error);
          }
        } else {
          toast(res.data);
          setIsLoading(false);
        }
      } catch (error) {
        toast(error.response.data);
      }
    }
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
      email: "",
      amount: "",
      status: "",
    },
    validationSchema: adminSchema,
    onSubmit,
  });
  return (
    <div className={styles.superContainer}>
      <ToastContainer />
      {isLoading ? <h3>Loading....</h3> : null}

      <form onSubmit={handleSubmit} className={styles.container}>
        <Link href="/" className={styles.linkDiv}>
          <BiIcons.BiLogOutCircle style={styleIcon} />
          <span>Log Out</span>
        </Link>
        <label>Admin Form</label>
        <div className={styles.mainForm}>
          <h1>Investor Update Details</h1>
          <div className={styles.lineDiv}></div>

          <div className={styles.mainFormBody}>
            <h2>Email</h2>
            <div className={styles.inputDiv}>
              <input
                placeholder="email"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="email"
                id="email"
              />
            </div>

            <h2>Amount</h2>
            <div className={styles.inputDiv}>
              <input
                placeholder="Amount"
                type="number"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.amount}
                name="amount"
                id="amount"
              />
            </div>

            <h2>Status</h2>
            <div className={styles.inputDiv}>
              <input
                placeholder="Status either Withdrawal or Deposit"
                type="text"
                onBlur={handleBlur}
                onChange={handleChange}
                id="status"
                name="status"
                value={values.status}
              />
            </div>
            <div className={styles.buttonDiv}>
              {touched.email ||
              touched.amount ||
              (touched.status &&
                !errors.email &&
                !values.amount &&
                !values.status) ? (
                <button>Update</button>
              ) : (
                <button disabled>Update</button>
              )}
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default index;
