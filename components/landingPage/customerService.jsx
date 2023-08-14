import React, { useState } from "react";
import Image from "next/image";
import WorkSpaceImg from "../../public/assets/images/customerservice/workPlace.svg";
import ArrowDownImg from "../../public/assets/images/customerservice/chevron-down.svg";
import LineImg from "../../public/assets/images/customerservice/serviceLine.svg";
import styles from "../../styles/CustomerService.module.css";

const ImgStyles = { cursor: "pointer" };

const customerService = () => {
  const [showFaqAnswer1, setShowFaqAnswer1] = useState(false);
  const [showFaqAnswer2, setShowFaqAnswer2] = useState(false);
  const [showFaqAnswer3, setShowFaqAnswer3] = useState(false);
  const [showFaqAnswer4, setShowFaqAnswer4] = useState(false);
  const [showFaqAnswer5, setShowFaqAnswer5] = useState(false);
  const [showFaqAnswer6, setShowFaqAnswer6] = useState(false);
  const [showFaqAnswer7, setShowFaqAnswer7] = useState(false);
  const [showFaqAnswer8, setShowFaqAnswer8] = useState(false);
  const [showFaqAnswer9, setShowFaqAnswer9] = useState(false);
  const [showFaqAnswer10, setShowFaqAnswer10] = useState(false);
  const [showFaqAnswer11, setShowFaqAnswer11] = useState(false);
  const [showFaqAnswer12, setShowFaqAnswer12] = useState(false);
  const [showFaqAnswer13, setShowFaqAnswer13] = useState(false);
  const [showFaqAnswer14, setShowFaqAnswer14] = useState(false);
  const [showFaqAnswer15, setShowFaqAnswer15] = useState(false);
  const [showFaqAnswer16, setShowFaqAnswer16] = useState(false);
  const [showFaqAnswer17, setShowFaqAnswer17] = useState(false);
  const [showFaqAnswer18, setShowFaqAnswer18] = useState(false);
  const [showFaqAnswer19, setShowFaqAnswer19] = useState(false);
  const [showFaqAnswer20, setShowFaqAnswer20] = useState(false);
  const [showFaqAnswer21, setShowFaqAnswer21] = useState(false);
  const [showFaqAnswer22, setShowFaqAnswer22] = useState(false);

  const openFaq1 = () => {
    setShowFaqAnswer1(!showFaqAnswer1);
  };
  const openFaq2 = () => {
    setShowFaqAnswer2(!showFaqAnswer2);
  };
  const openFaq3 = () => {
    setShowFaqAnswer3(!showFaqAnswer3);
  };
  const openFaq4 = () => {
    setShowFaqAnswer4(!showFaqAnswer4);
  };
  const openFaq5 = () => {
    setShowFaqAnswer5(!showFaqAnswer5);
  };
  const openFaq6 = () => {
    setShowFaqAnswer6(!showFaqAnswer6);
  };
  const openFaq7 = () => {
    setShowFaqAnswer7(!showFaqAnswer7);
  };
  const openFaq8 = () => {
    setShowFaqAnswer8(!showFaqAnswer8);
  };
  const openFaq9 = () => {
    setShowFaqAnswer9(!showFaqAnswer9);
  };
  const openFaq10 = () => {
    setShowFaqAnswer10(!showFaqAnswer10);
  };
  const openFaq11 = () => {
    setShowFaqAnswer11(!showFaqAnswer11);
  };
  const openFaq12 = () => {
    setShowFaqAnswer12(!showFaqAnswer12);
  };
  const openFaq13 = () => {
    setShowFaqAnswer13(!showFaqAnswer13);
  };
  const openFaq14 = () => {
    setShowFaqAnswer14(!showFaqAnswer14);
  };
  const openFaq15 = () => {
    setShowFaqAnswer15(!showFaqAnswer15);
  };
  const openFaq16 = () => {
    setShowFaqAnswer16(!showFaqAnswer16);
  };
  const openFaq17 = () => {
    setShowFaqAnswer17(!showFaqAnswer17);
  };
  const openFaq18 = () => {
    setShowFaqAnswer18(!showFaqAnswer18);
  };
  const openFaq19 = () => {
    setShowFaqAnswer19(!showFaqAnswer19);
  };
  const openFaq20 = () => {
    setShowFaqAnswer20(!showFaqAnswer20);
  };
  const openFaq21 = () => {
    setShowFaqAnswer21(!showFaqAnswer21);
  };
  const openFaq22 = () => {
    setShowFaqAnswer22(!showFaqAnswer22);
  };

  return (
    <div className={styles.serviceContainer}>
      <Image src={WorkSpaceImg} alt="work space" />
      <div className={styles.secondCol}>
        <label>FREQUENTLY ASKED QUESTIONS</label>
        <div className={styles.secondColRow}>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What is the minimum investment amount?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq1}
              />
            </div>
            {showFaqAnswer1 ? (
              <h4>
                $20(Investors are to remember to include a charge of $1 on every
                investment to validate investment)
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What is the maximum investment amount?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq2}
              />
            </div>
            {showFaqAnswer2 ? (
              <h4>
                $500,000 is the maximum , but you can create multiple accounts
                if you wish to go beyond that.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What is the miminum withdrawal amount?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq3}
              />
            </div>
            {showFaqAnswer3 ? <h4>$50.</h4> : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Any withdrawal charges?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq4}
              />
            </div>
            {showFaqAnswer4 ? (
              <h4>
                $1 is required for every withdrawal irrespective of the amount.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Can I increase my investment at any time?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq5}
              />
            </div>
            {showFaqAnswer5 ? (
              <h4>Yes, you can top-up any time with a minimum of $20.</h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Does my deposited USDT start trading immediately?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq6}
              />
            </div>
            {showFaqAnswer6 ? (
              <h4>
                First Deposit is automatically picked up for trading after few
                minutes.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>
                Can I change my personal information and withdrawal wallet
                address?
              </p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq7}
              />
            </div>
            {showFaqAnswer7 ? (
              <h4>Yes, you can change your personal information.</h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Can I withdraw both my ROI and Capital anytime i want?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq8}
              />
            </div>
            {showFaqAnswer8 ? (
              <h4>
                You can withdraw your ROI anytime you have up to $51. Capital is
                placed up in the mining Liquidity pool for mining. But you can
                notify us officially for a capital refund, and as soon as
                notification is received, and investment is updated, funds will
                be released. NB: Any capital refund is followed by total closure
                and deletion of the account from the Blockchain.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>How long does withdrawal take?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq9}
              />
            </div>
            {showFaqAnswer9 ? (
              <h4>Withdrawal is super fast, it takes less than 1 minute.</h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>How does Boom Trade pay investors?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq10}
              />
            </div>
            {showFaqAnswer10 ? (
              <h4>
                Binance payment gateway is responsible for payouts in USDT
                TRC20.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Can I have multiple accounts?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq11}
              />
            </div>
            {showFaqAnswer11 ? (
              <h4>
                Yes, but each account should have a different email address and
                phone number, but you can use the same withdrawal wallet address
                for multiple accounts.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Is referring compulsory?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq12}
              />
            </div>
            {showFaqAnswer12 ? (
              <h4>
                No, referring is not compulsory but one can earn 5% from a
                prospective investor through your referral.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What is the return on investment?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq13}
              />
            </div>
            {showFaqAnswer13 ? (
              <h4>
                BoomTrade operates a recurrence interest system. 1.75% interest
                daily is the minimum for the first 20 days. On the 21st of every
                month, the system switches to 2.5% interest for 5 days, followed
                by 3.8% interest for 3 days,5% interest for 2 days and then back
                to 1.75% for the following 20 days for the new month totalling
                68.9% monthly.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Can the blockchain skip an investor's daily interest?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq14}
              />
            </div>
            {showFaqAnswer14 ? (
              <h4>
                Blockchain keeps an accurate record of it's operations and does
                regular auditing to adjust any underpayment or overpayment.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>When will auto-compounding of interets commence?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq15}
              />
            </div>
            {showFaqAnswer15 ? (
              <h4>
                Auto compounding will be integrated when the liquidity pool has
                grown considerably.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>When was BoomTrade launched officially?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq16}
              />
            </div>
            {showFaqAnswer16 ? <h4>1st May 2023.</h4> : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Do I have to trade manually before then?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq17}
              />
            </div>
            {showFaqAnswer17 ? (
              <h4>
                No, you do not need to earn manually as your investment has been
                placed into a mining pool with an automated dailypayment.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What should I do immediately after creating an account?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq18}
              />
            </div>
            {showFaqAnswer18 ? (
              <h4>
                You must provide your account with a USDT TRC20 wallet address
                so that withdrawal of earnings can be initiated.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Do investors have permanent deposit addresses in BoomTrade?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq19}
              />
            </div>
            {showFaqAnswer19 ? (
              <h4>
                No, the Blockchain generates a unique deposit address each a
                deposit is initiated by an investor. Each deposit address
                generated cannot be used twice.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>What is the official website of BoomTrade?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq20}
              />
            </div>
            {showFaqAnswer20 ? <h4>www.boomtrade.us</h4> : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Does BoomTrade have any office?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq21}
              />
            </div>
            {showFaqAnswer21 ? (
              <h4>
                Yes, Skypark office complex, 2647 Forest Ave Chico, California.
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
          <div className={styles.faqDiv}>
            <div className={styles.colRow}>
              <p>Who owns BoomTrade?</p>
              <Image
                src={ArrowDownImg}
                alt="arrow down"
                style={ImgStyles}
                onClick={openFaq22}
              />
            </div>
            {showFaqAnswer22 ? (
              <h4>
                Boom Trade is owned and controlled by a group of Trade
                Experts/Analysts Known as "The Future".
              </h4>
            ) : null}
            <div className={styles.lineDiv}>
              {/* <Image src={LineImg} alt="line" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default customerService;
