import React from "react";
import Modal from "./Modal";
import Image from "next/image";
import styles from "../../styles/Success.module.css";
import SuccessGif from "../../public/assets/images/boldo/loaderGif.gif";

const gifStyle = { width: "80%", height: "50%" };

const successModal = ({ open, close }) => {
  return (
    <Modal open={open} close={close}>
      <div className={styles.container}>
        <Image src={SuccessGif} alt="gif" style={gifStyle} />

        <label>Success</label>
        <h1>
          Your account will be credited within 24 hours once your deposit is
          confirmed..
        </h1>
        <div className={styles.continue}>
          <p onClick={close}>Continue</p>
        </div>
      </div>
    </Modal>
  );
};

export default successModal;
