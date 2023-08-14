import React, { useState, useEffect } from "react";
import styles from "../../styles/Dashboard.module.css";
import Card from "../../pages/dashboard/card";
import WhiteCard from "../../pages/dashboard/whiteCard";
import Table from "../../pages/dashboard/table";
import TableBody from "../../pages/dashboard/tableBody";
import * as MdIcons from "react-icons/md";
import * as BsIcons from "react-icons/bs";
import * as FaIcons from "react-icons/fa";

const styleIconCard = { width: "30px", height: "30px" };
const styleIcon = { color: "#65e4a3", width: "30px", height: "30px" };

const dashboard = ({ account_details, transaction_details }) => {
  const [mainDetails, setMainDetails] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const priceSplitter = (number) =>
    number && number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

  console.log("Aaa", account_details);

  const capital = account_details.capital;
  const roi = account_details.roi;
  const referralEarnings = account_details.referralEarnings;
  const totalBalance =
    parseInt(capital) + parseInt(roi) + parseInt(referralEarnings);

  const withdrawals = transaction_details.filter(
    (item) => item.status === "Withdrawal"
  );
  const withdrawalsCount = withdrawals.length;

  const deposits = transaction_details.filter(
    (item) => item.status === "Deposit"
  );
  const depositsCount = deposits.length;

  return (
    <React.Fragment>
      {isLoading ? (
        <div className={styles.loaderDiv}>
          <h6>Loading...</h6>
        </div>
      ) : (
        <div className={styles.dashboardWrapper}>
          <div className={styles.bodyDiv1}>
            <Card
              key="balance"
              cardImage={<MdIcons.MdPriceChange style={styleIcon} />}
              labelText={`USDT ${priceSplitter(totalBalance)}`}
              pText="Total Balance"
              descText="This card displays your total accrued interest plus capital from all
    your investments with boom trade inc."
            />
            <WhiteCard
              key="investment"
              cardImage={<MdIcons.MdPriceChange style={styleIconCard} />}
              labelText={`USDT ${priceSplitter(capital)}`}
              pText="Investment"
              descText="This card displays only the total amount of your investment/capital with boom trade inc."
            />
            <WhiteCard
              key="roi"
              cardImage={<MdIcons.MdPriceChange style={styleIconCard} />}
              labelText={`USDT ${priceSplitter(roi)}`}
              pText="Earnings"
              descText="This card displays the total accrued interest earned on your investment with boom trade inc."
            />
          </div>
          <div className={styles.bodyDiv2}>
            <WhiteCard
              key="deposits"
              cardImage={<BsIcons.BsBriefcaseFill style={styleIconCard} />}
              labelText={depositsCount}
              pText="No Of Deposits"
              descText="This card displays the total number of deposits you have made with boom trade inc."
            />
            <Card
              key="referrals"
              cardImage={<MdIcons.MdPriceChange style={styleIcon} />}
              labelText={`USDT ${priceSplitter(referralEarnings)}`}
              pText="Referral Earnings"
              descText="This card displays your total amount earned via your referrals to boom trade inc."
            />
            <WhiteCard
              key="withdrawals"
              cardImage={<FaIcons.FaFolderOpen style={styleIconCard} />}
              labelText={withdrawalsCount}
              pText="No Of Withdrawals"
              descText="This card displays the total number of withdrawals you have made with boom trade inc."
            />
          </div>
          <div className={styles.tableDiv}>
            <Table />
            {transaction_details.map((transaction) => (
              <TableBody
                key={transaction.transactionId}
                transactionId={transaction.transactionId}
                transactionAmount={transaction.amount}
                transactionStatus={transaction.status}
                date={transaction.date}
              />
            ))}
          </div>
        </div>
      )}
    </React.Fragment>
  );
};

export default dashboard;
