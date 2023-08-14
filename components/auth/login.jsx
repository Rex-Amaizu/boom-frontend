import React, { useState, useEffect, useRef } from "react";
import { useRouter } from "next/router";
import styled from "styled-components";
import axios from "axios";
import { baseUrl_ } from "../../utils/constants";
import GlobalInput from "../layouts/GlobalInput";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import * as AiIcons from "react-icons/ai";
import { useFormik } from "formik";
import { useMedia } from "../../hooks/useResponsive";
import { loginSchema } from "../../utils/validations";
import GlobalButton from "../layouts/GlobalButton";

const styleIcon = {
  width: "24px",
  height: "24px",
  color: "#0a2640",
  cursor: "pointer",
};

const login = ({ checkSubmit }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [rememberMe, setRememberMe] = useState("");
  const [param, setParam] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const router = useRouter();

  const mobileScreen = useMedia("(max-width: 600px)");

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const handlePersist = () => {};

  const onSubmit = async (values) => {
    setParam(!param);
    checkSubmit(param);
    setIsLoading(true);

    const payload = {
      email: values.email,
      password: values.password,
    };

    if (
      payload.email === "admin@boomtrade.com" &&
      payload.password === "hustle@2023"
    ) {
      localStorage.setItem("admin", JSON.stringify("admin001"));
      router.push("/admin");

      return;
    }

    const url = `${baseUrl_}users/login`;

    try {
      const res = await axios(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      });

      if (res.data.status === 200) {
        toast(res.data.message);
        localStorage.setItem("boomId", JSON.stringify(res.data.user.id));
        localStorage.setItem("boomToken", JSON.stringify(res.data.token));
        // console.log("userId", res.data.user.id);
        // console.log("userToken", res.data.token);
        setIsLoading(false);
        router.push("/dashboard");
      } else {
        toast(res.data.message);
        setIsLoading(false);
      }
    } catch (error) {
      toast(error.response.data);
      setIsLoading(false);
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
      password: "",
    },
    validationSchema: loginSchema,
    onSubmit,
  });
  return (
    <form onSubmit={handleSubmit}>
      <MainForm>
        <ToastContainer />
        {isLoading ? <h3>Loading....</h3> : null}
        <EmailInput>
          <GlobalInput
            borderBottom="2px solid #a1a1a1"
            borderTop="2px solid #a1a1a1"
            borderLeft="2px solid #a1a1a1"
            borderRight="2px solid #a1a1a1"
            labelText="E-mail*"
            labelColor="#696f79"
            labelFontWeight="500px"
            labelFontSize="16px"
            handleBlurInput={handleBlur}
            handleChangeInput={handleChange}
            inputValue={values.email}
            inputName="email"
          />
          {errors.email && touched.email ? (
            <h6 className="error-all">{errors.email}</h6>
          ) : (
            <h6 className="no-error">email is required</h6>
          )}
        </EmailInput>

        <PasswordInputOrig>
          <label>Password*</label>
          <PasswordInputIconOrig>
            <input
              onChange={handleChange}
              value={values.password}
              type={passwordShown ? "text" : "password"}
              name="password"
              placeHolder="************************"
              id="password"
              onBlur={handleBlur}
            />
            <EyeIcon>
              {passwordShown ? (
                <AiIcons.AiOutlineEye
                  onClick={togglePassword}
                  style={styleIcon}
                />
              ) : (
                <AiIcons.AiOutlineEyeInvisible
                  onClick={togglePassword}
                  style={styleIcon}
                />
              )}
            </EyeIcon>
          </PasswordInputIconOrig>
        </PasswordInputOrig>
        <ForgetPassDiv>
          <CheckBoxDiv>
            <CheckBox>
              <input
                onChange={handlePersist}
                value={rememberMe}
                type="checkbox"
                name="rememberMe"
                id="rememberMe"
              />
            </CheckBox>
            <span>Remember Me</span>
          </CheckBoxDiv>
          <ForgetPass>
            <p>Forget Password?</p>
          </ForgetPass>
        </ForgetPassDiv>
        <SignUp>
          {!errors.email && values.email && values.password ? (
            <GlobalButton buttonText="Login" disabledButton="false" />
          ) : (
            <GlobalButton buttonText="Login" disabledButton="true" />
          )}
          <label>Don't have an account? Sign Up</label>
        </SignUp>
      </MainForm>
    </form>
  );
};

export default login;

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: auto;
  gap: 10px;

  && h3 {
    width: auto;
    height: 20px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 700;
    font-size: 24px;
    line-height: 20px;
    color: #65e4a3;
  }

  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }
  
  && h6 {
    width: 100%;
  }

    
  @media (max-width: 868px) {
    width: 520px;
    height: auto;
  }

  @media (max-width: 600px) {
    width: 260px;
    height: auto;
    }
  }
`;
const EmailInput = styled.div`
  width: 100%;
`;
const PasswordInputOrig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 100%;
  height: 77px;

  && label {
    width: 160px;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #696f79;
  }

  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }

  && h6 {
    width: 100%;
  }

  && input.pass-input-error {
    border: 2px solid red;
    border-right-width: 0px;
  }
`;
const PasswordInputIconOrig = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 48px;
  border: 2px solid #a1a1a1;
  border-radius: 8px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;

  && input {
    padding-left: 10px;
    box-sizing: border-box;
    width: 93%;
    height: 48px;
    outline: none;
    border: 2px solid #a1a1a1;
    border-radius: 6px 0px 0px 6px;
    border-right-width: 0px;
  }
  && input.pass-input-error {
    border: 2px solid red;
    border-right-width: 0px;
  }

  @media (max-width: 868px) {
    width: 100%;

    && input {
      width: 90%;
    }
  }

  @media (max-width: 600px) {
    && input {
      width: 85%;
    }
  }
`;

const EyeIcon = styled.div`
  box-sizing: border-box;
  display: flex;
  align-items: center;
  width: 7%;
  height: 48px;
  border: ${(props) => (props.error ? `2px solid red` : `2px solid #A1A1A1`)};
  border-radius: 0px 6px 6px 0px;
  border-left-width: 0px;

  @media (max-width: 868px) {
    width: 10%;
  }

  @media (max-width: 600px) {
    width: 15%;
  }
`;
const ForgetPassDiv = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  margin-top: 10px;
`;
const CheckBoxDiv = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: auto;

  && span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #65e4a3;
  }
`;
const CheckBox = styled.div`
  width: 24px;
  height: 24px;

  input[type="checkbox"] {
    accent-color: #0a2640;
    width: 24px;
    height: 24px;
    cursor: pointer;
  }
`;
const ForgetPass = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: auto;

  && p {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #65e4a3;
  }
`;
const SignUp = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 100%;
  height: auto;
  margin-top: 10px;

  && label {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #65e4a3;
    cursor: pointer;
  }
`;
