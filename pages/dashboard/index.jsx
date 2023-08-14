import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import Withdraw from "../../components/dashboard/withdraw";
import DashboardComp from "../../components/dashboard/dashboard";
import Invest from "../../components/dashboard/invest";
import Settings from "../../components/dashboard/userSetting";
import Pay from "../../components/dashboard/pay";
import Link from "next/link";
import Image from "next/image";
import axios from "axios";
import { baseUrl_ } from "../../utils/constants";
import { useMedia } from "../../hooks/useResponsive";
import { useRouter } from "next/router";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";
import { GiHamburgerMenu } from "react-icons/gi";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";
import * as BiIcons from "react-icons/bi";

const styleIcon = { color: "#65e4a3", width: "30px", height: "30px" };
const iconStyle = { cursor: "pointer", width: "50px", height: "50px" };
const imgStyle = { width: "160px", height: "150px" };

const Dashboard = () => {
  const [withdraw, setWithdraw] = useState(false);
  const [dashboard, setDashboard] = useState(true);
  const [invest, setInvest] = useState(false);
  const [setting, setSetting] = useState(false);
  const [navbar, setNavbar] = useState(false);
  const [payUp, setPayUp] = useState(false);
  const [userData, setUserData] = useState();
  const [dataSet, setDataSet] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [actDetails, setActDetails] = useState({});
  const [transDetails, setTransDetails] = useState([]);
  const mobileDevice = useMedia("(max-width: 600px)");
  const smallMobile = useMedia("(max-width: 390px)");

  const router = useRouter();

  const { amount, wallet } = router.query;

  const showWithdraw = () => {
    setWithdraw(true);
    setDashboard(false);
    setInvest(false);
    setSetting(false);
    setPayUp(false);
    setNavbar(false);
  };
  const showDashboard = () => {
    setDashboard(true);
    setWithdraw(false);
    setInvest(false);
    setSetting(false);
    setPayUp(false);
    setNavbar(false);
  };
  const showInvest = () => {
    setInvest(true);
    setWithdraw(false);
    setDashboard(false);
    setSetting(false);
    setPayUp(false);
    setNavbar(false);
  };
  const showSetting = () => {
    setSetting(true);
    setWithdraw(false);
    setDashboard(false);
    setInvest(false);
    setPayUp(false);
    setNavbar(false);
  };

  useEffect(() => {
    {
      if (amount !== undefined) {
        setPayUp(true);
        setSetting(false);
        setWithdraw(false);
        setDashboard(false);
        setInvest(false);
        setNavbar(false);
      }
    }
  }, [amount]);

  const toggleNavbar = () => {
    setNavbar(!navbar);
  };

  const logOut = () => {
    localStorage.removeItem("boomId");
    localStorage.removeItem("boomToken");
    localStorage.removeItem("dataItems");

    router.push("/");
  };

  async function fetchData() {
    const user_id = JSON.parse(localStorage.getItem("boomId"));
    const user_token = JSON.parse(localStorage.getItem("boomToken"));

    if (user_token) {
      const url = `${baseUrl_}users/user-profile?userId=${user_id}`;
      console.log(url);
      try {
        const response = await fetch(url, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${user_token}`,
          },
        });

        const data = await response.json();

        if (data.status === 200) {
          localStorage.setItem("dataItems", JSON.stringify(data.data));
          setUserData(data.data);
          setDataSet(true);
        }
      } catch (error) {
        console.log(error.message);
      }
    } else {
      return null;
    }
  }

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem("dataItems"));
    if (items) {
      setUserData(items);
      setDataSet(true);
    }

    if (dataSet && userData !== undefined) {
      const first_name = userData.firstName;
      const last_name = userData.lastName;
      const email = userData.email;
      const referral_code = userData.referralCode;
      const phone_number = userData.phoneNumber;
      setActDetails(userData.accountDetails[0]);
      setTransDetails(userData.transactionDetails);
      setIsLoading(false);
    }
  }, [dataSet]);

  return (
    <React.Fragment>
      {isLoading || userData === undefined || !dataSet ? (
        <div className={styles.loaderDiv}>
          <h6>Loading...</h6>
        </div>
      ) : (
        <div className={styles.mainWrapper}>
          <div className={styles.mainMenuWrap}>
            <div className={styles.hamburger} onClick={toggleNavbar}>
              <GiHamburgerMenu style={iconStyle} />
            </div>

            {mobileDevice && !navbar ? null : (
              <div className={styles.menuWrapper}>
                <Link
                  href=""
                  className={styles.linkDiv}
                  onClick={showDashboard}
                >
                  <MdIcons.MdDashboard
                    style={styleIcon}
                    onClick={showDashboard}
                  />
                  <span onClick={showDashboard}>Dashboard</span>
                </Link>
                <Link href="" className={styles.linkDiv} onClick={showInvest}>
                  <BsIcons.BsBriefcaseFill
                    style={styleIcon}
                    onClick={showInvest}
                  />
                  <span onClick={showInvest}>Invest</span>
                </Link>
                <Link href="" className={styles.linkDiv} onClick={showWithdraw}>
                  <FaIcons.FaFolderOpen
                    style={styleIcon}
                    onClick={showWithdraw}
                  />
                  <span onClick={showWithdraw}>Withdraw</span>
                </Link>
                <Link href="" className={styles.linkDiv} onClick={showSetting}>
                  <MdIcons.MdSettings style={styleIcon} onClick={showSetting} />
                  <span onClick={showSetting}>Settings</span>
                </Link>
                <div className={styles.linkDiv}>
                  <BiIcons.BiLogOutCircle style={styleIcon} onClick={logOut} />
                  <span onClick={logOut}>Log Out</span>
                </div>
              </div>
            )}
          </div>
          <div className={styles.bodyWrapper}>
            <div className={styles.lineDiv}>
              <Image
                src={LogoImg}
                alt="logo"
                style={smallMobile ? imgStyle : null}
              />
            </div>
            {(setting && (
              <Settings
                refCode={userData.referralCode}
                firstName={userData.firstName}
                lastName={userData.lastName}
                email={userData.email}
                phone={userData.phoneNumber}
                walletAdd={actDetails.walletAddress}
              />
            )) ||
              (dashboard && (
                <DashboardComp
                  account_details={actDetails}
                  transaction_details={transDetails}
                />
              )) ||
              (invest && <Invest />) ||
              (withdraw && <Withdraw />) ||
              (payUp && <Pay amount={amount} wallet={wallet} />)}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default Dashboard;
