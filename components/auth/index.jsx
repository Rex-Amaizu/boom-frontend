import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import Image from "next/image";
import Register from "./register";
import Login from "./login";
import Modal from "../layouts/Modal";
import LogoImg from "../../public/assets/images/boldo/Logo.svg";

function index({ open, close, referral, onSuccess }) {
  const styleIcon = {
    width: "24px",
    height: "24px",
    color: "#f26222",
    cursor: "pointer",
  };

  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+234");
  const [selectedCountryAbbr, setSelectedCountryAbbr] = useState("NG");
  const [loginForm, setLoginForm] = useState(false);
  const [registerForm, setRegisterForm] = useState(true);
  const [sobmit, setSobmit] = useState();

  const ballLoader = useRef();
  const baller = useRef();

  const showLoginForm = () => {
    setRegisterForm(false);
    setLoginForm(true);
  };
  const showRegisterForm = () => {
    setLoginForm(false);
    setRegisterForm(true);
  };

  const checkSubmit = (data) => {
    setSobmit(data);
  };

  useEffect(() => {
    if (sobmit) {
      ballLoader.current?.scrollIntoView({ block: "nearest" });
    }
    if (!sobmit) {
      baller.current?.scrollIntoView({ block: "nearest" });
    }
  }, [sobmit]);

  return (
    <Modal open={open} close={close}>
      <ModalBody>
        <div ref={ballLoader}></div>
        <div ref={baller}></div>
        <CloseModalButton aria-label="Close" onClick={close}>
          <label>Close</label>
        </CloseModalButton>

        <FormBody>
          <FxiMasterHeader>
            <Image src={LogoImg} alt="logo" />
            <LabelHeader>
              {registerForm && <label>Create An Account</label>}
              {loginForm && <label>Log Into Your Account</label>}
            </LabelHeader>
            <LoaderBall></LoaderBall>
            <SmallHeaderText>
              {registerForm && (
                <p>
                  Create An Account To Have Unlimited Access To Boom Services
                </p>
              )}
              {loginForm && (
                <p>Log Into Your Account To Have Access To Boom Services</p>
              )}
            </SmallHeaderText>
            <ToggleDiv>
              <RegisterButton
                register={registerForm}
                onClick={showRegisterForm}
              >
                Register
              </RegisterButton>
              <LoginButton login={loginForm} onClick={showLoginForm}>
                Login
              </LoginButton>
            </ToggleDiv>
          </FxiMasterHeader>

          {registerForm && (
            <Register signUp={showRegisterForm} checkSubmit={checkSubmit} />
          )}
          {loginForm && (
            <Login signIn={showLoginForm} checkSubmit={checkSubmit} />
          )}
        </FormBody>
      </ModalBody>
    </Modal>
  );
}

export default index;

const ModalBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 32px 34px;
  gap: 10px;

  width: 768px;
  height: auto;

  background: #ffffff;
  box-shadow: -4px -4px 46px rgba(0, 0, 0, 0.25),
    4px 4px 4px rgba(0, 0, 0, 0.25);
  border-radius: 8px;

  @media (max-width: 868px) {
    width: 540px;
  }

  @media (max-width: 600px) {
    width: 280px;
  }
`;

const CloseModalButton = styled.div`
  position: absolute;
  top: 30px;
  right: 20px;
  width: 32px;
  height: 32px;
  padding: 0;
  z-index: 10;

  && label {
    cursor: pointer;
    width: 41px;
    height: 19px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    /* identical to box height */

    color: #f26222;

    /* Inside auto layout */

    flex: none;
    order: 0;
    flex-grow: 0;
  }
`;

const FormBody = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 0px;
  gap: 24px;

  width: 700px;
  height: auto;

  .error-all {
    color: red;
  }

  @media (max-width: 868px) {
    width: 520px;
  }

  @media (max-width: 600px) {
    width: 260px;
  }
`;
const FxiMasterHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 208px;

  && img {
    width: 177px;
    height: 88px;
  }

  @media (max-width: 600px) {
    && img {
      width: 130px;
      height: 70px;
    }
  }
`;
const LabelHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 56px;

  && label {
    height: 36px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 36px;
    text-transform: uppercase;
    color: #242731;
  }

  @media (max-width: 600px) {
    height: 40px;

    && label {
      height: 30px;
      font-size: 18px;
    }
  }
`;
const LoaderBall = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const SmallHeaderText = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 459.93px;
  height: 64px;

  && p {
    width: 439.93px;
    height: 44px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    text-align: center;
    color: #575f6e;
  }

  @media (max-width: 600px) {
    width: 258px;
    height: 40px;

    && p {
      width: 258px;
      height: 40px;
      font-size: 12px;
      line-height: 14px;
    }
  }
`;
const ToggleDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;
const RegisterButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.register ? `#0a2640` : `#b3b3b3`)};
  cursor: pointer;
  height: 40px;
  width: 130px;
  border: 2px solid #d9d9d9;
  color: white;
`;
const LoginButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => (props.login ? `#0a2640` : `#b3b3b3`)};
  cursor: pointer;
  height: 40px;
  width: 130px;
  border: 2px solid #d9d9d9;
  color: white;
`;
