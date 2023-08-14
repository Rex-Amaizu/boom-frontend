import React, { useEffect, useState } from "react";
import styles from "../../styles/Settings.module.css";
import * as FaIcons from "react-icons/fa";
import GlobalInput from "../layouts/GlobalInput";
import ReactFlagsSelect from "react-flags-select";
import axios from "axios";
import { AsYouType } from "libphonenumber-js";
import { useMedia } from "../../hooks/useResponsive";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Countries from "../../utils/countries";
import GlobalButton from "../layouts/GlobalButton";
import { baseUrl_ } from "../../utils/constants";

const styleIcon = { width: "90px", height: "90px", color: "#65e4a3" };
const copyIcon = { color: "#65e4a3" };

const userSetting = ({
  email,
  refCode,
  firstName,
  lastName,
  phone,
  walletAdd,
}) => {
  const [data, setData] = useState({});
  const [selectedCountryCode, setSelectedCountryCode] = useState("");
  const [selectedCountryAbbr, setSelectedCountryAbbr] = useState("");
  const [phon, setPhon] = useState();
  const [firstN, setFirstN] = useState("");
  const [lastN, setLasttN] = useState("");
  const [mail, setMail] = useState("");
  const [phoneN, setPhoneN] = useState("");
  const [walletA, setWalletA] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const mobileScreen = useMedia("(max-width: 600px)");

  useEffect(() => {
    setFirstN(firstName);
    setLasttN(lastName);
    setMail(email);
    setPhoneN(phone);
    setWalletA(walletAdd);
  }, []);

  const submit = async (e) => {
    setIsLoading(true);
    try {
      e.preventDefault();
      const userId = JSON.parse(localStorage.getItem("boomId"));

      const payload = {
        firstName: `${
          data.firstName == undefined ||
          data.firstName == null ||
          data.firstName == ""
            ? firstN
            : data.firstName
        }`,
        lastName: `${
          data.lastName == undefined ||
          data.lastName == null ||
          data.lastName == ""
            ? lastN
            : data.lastName
        }`,
        email: `${
          data.email == undefined || data.email == null || data.email == ""
            ? mail
            : data.email
        }`,
        wallet: `${
          data.wallet == undefined || data.wallet == null || data.wallet == ""
            ? walletA
            : data.wallet
        }`,
        phoneNumber: `${
          phon == undefined || phon == null || phon == ""
            ? phoneN
            : selectedCountryCode + phon
        }`,

        userId: userId,
      };
      const url = `${baseUrl_}users/user-settings`;
      const token = JSON.parse(localStorage.getItem("boomToken"));

      try {
        const res = await axios(url, {
          method: "post",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
          data: payload,
        });

        if (res.data.status === 200) {
          toast(res.data.message);

          setIsLoading(false);
        } else {
          toast(res.data.message);
          setIsLoading(false);
        }
      } catch (error) {
        toast(error.response.data);
        setIsLoading(false);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const fullName = firstName + " " + lastName;

  return (
    <form onSubmit={submit} className={styles.container}>
      <div className={styles.userProfile}>
        <FaIcons.FaUserCircle style={styleIcon} />
        <label>{fullName}</label>
        <p>{email}</p>
      </div>
      <div className={styles.profileDetails}>
        <ToastContainer />
        {isLoading ? <h3>Loading....</h3> : null}
        <div className={styles.firstCol}>
          <div className={styles.copyDiv}>
            Referral Code: <h2>{refCode}</h2>
            <FaIcons.FaCopy
              onClick={() => {
                navigator.clipboard.writeText(refCode);
                alert("copied");
              }}
              style={copyIcon}
            />
          </div>
          <h3>
            Use this referral code to invite new users to Boom Inc, and earn 5%
            referral bonuses on all investments done by you referrals.
          </h3>
        </div>
        <div className={styles.secondCol}>
          <div className={styles.userProfileDiv}>
            <h4>User Profile Settings</h4>
          </div>
          <div className={styles.formDiv}>
            <GlobalInput
              borderBottom="2px solid #bfbfbf"
              borderTop="2px solid #bfbfbf"
              borderLeft="2px solid #bfbfbf"
              borderRight="2px solid #bfbfbf"
              labelFontWeight="700px"
              labelFontSize="16px"
              inputValue={data.firstName}
              inputName="firstName"
              labelText="First Name"
              inputPlacholder={firstName}
              handleChangeInput={(e) => {
                const newData = e.target.value;
                setData((currentValue) => ({
                  ...currentValue,
                  firstName: newData,
                }));
              }}
            />
            <GlobalInput
              borderBottom="2px solid #bfbfbf"
              borderTop="2px solid #bfbfbf"
              borderLeft="2px solid #bfbfbf"
              borderRight="2px solid #bfbfbf"
              labelFontWeight="700px"
              labelFontSize="16px"
              inputValue={data.lastName}
              inputName="lastName"
              labelText="Last Name"
              inputPlacholder={lastName}
              handleChangeInput={(e) => {
                const newData = e.target.value;
                setData((currentValue) => ({
                  ...currentValue,
                  lastName: newData,
                }));
              }}
            />
            <GlobalInput
              borderBottom="2px solid #bfbfbf"
              borderTop="2px solid #bfbfbf"
              borderLeft="2px solid #bfbfbf"
              borderRight="2px solid #bfbfbf"
              labelFontWeight="700px"
              labelFontSize="16px"
              inputValue={data.email}
              inputName="email"
              labelText="E-mail Address"
              inputPlacholder={email}
              handleChangeInput={(e) => {
                const newData = e.target.value;
                setData((currentValue) => ({
                  ...currentValue,
                  email: newData,
                }));
              }}
            />
            <div className={styles.phoneDiv}>
              <label>Phone Number</label>
              <div className={styles.phoneInput}>
                <div className={styles.flagInput}>
                  <ReactFlagsSelect
                    borderColor="red"
                    showSelectedLabel={false}
                    selectedSize={mobileScreen ? 21 : 17}
                    searchable={true}
                    // showOptionLabel={false}
                    placeholder="Choose"
                    selected={selectedCountryAbbr}
                    onSelect={(abbr) => {
                      const found = Countries[abbr];
                      setSelectedCountryCode(found.secondary || abbr);
                      setSelectedCountryAbbr(abbr);
                    }}
                    customLabels={Countries}
                    showSecondarySelectedLabel={mobileScreen ? false : true}
                  />
                </div>
                <input
                  onChange={(e) => {
                    const result = new AsYouType(selectedCountryAbbr);
                    result.input(e.target.value);

                    // const newData = { ...data };
                    const newPhone = result.getNationalNumber();
                    setPhon(newPhone);

                    // setFieldValue("phoneNumber", result.getNationalNumber());
                  }}
                  value={data.phoneNumber}
                  type="text"
                  name="phoneNumber"
                  placeholder={phone}
                  id="phoneNumber"
                />
              </div>
            </div>
            <GlobalInput
              borderBottom="2px solid #bfbfbf"
              borderTop="2px solid #bfbfbf"
              borderLeft="2px solid #bfbfbf"
              borderRight="2px solid #bfbfbf"
              labelFontWeight="700px"
              labelFontSize="16px"
              inputValue={data.walletAddress}
              inputName="walletAdrres"
              labelText="Wallet Address"
              inputPlacholder={walletAdd}
              handleChangeInput={(e) => {
                const newData = e.target.value;
                setData((currentValue) => ({
                  ...currentValue,
                  wallet: newData,
                }));
              }}
            />
            <p>
              Make sure you enter correct TRC20 USDT Address, so you don't lose
              your funds.
            </p>

            <GlobalButton buttonText="Update" disabledButton="false" />
          </div>
        </div>
      </div>
    </form>
  );
};

export default userSetting;
