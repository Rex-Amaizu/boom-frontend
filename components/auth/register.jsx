import React, { useState, useEffect, useRef } from "react";
import styled from "styled-components";
import { useParams } from "react-router-dom";
import GlobalInput from "../layouts/GlobalInput";
import { AsYouType } from "libphonenumber-js";
import * as AiIcons from "react-icons/ai";
import ReactFlagsSelect from "react-flags-select";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ReactLoading from "react-loading";
import Countries from "../../utils/countries";
import axios from "axios";
import { baseUrl_ } from "../../utils/constants";
import { useFormik } from "formik";
import { useMedia } from "../../hooks/useResponsive";
import { registerSchema } from "../../utils/validations";
import GlobalButton from "../layouts/GlobalButton";

const styleIcon = {
  width: "24px",
  height: "24px",
  color: "#0a2640",
  cursor: "pointer",
};

const register = ({ bars, green, referral, signIn, checkSubmit }) => {
  const [passwordShown, setPasswordShown] = useState(false);
  const [selectedCountryCode, setSelectedCountryCode] = useState("+1");
  const [selectedCountryAbbr, setSelectedCountryAbbr] = useState("US");
  const [isLoading, setIsLoading] = useState(false);
  const [param, setParam] = useState(false);
  const ballLoader = useRef();

  const mobileScreen = useMedia("(max-width: 600px)");

  const [data, setData] = useState({
    referrals: referral || "",
  });

  const togglePassword = () => {
    setPasswordShown(!passwordShown);
  };

  const onSubmit = async (values) => {
    setParam(!param);
    checkSubmit(param);
    setIsLoading(true);

    const clientNumber = selectedCountryCode + data.phoneNumber;

    const payload = {
      firstName: values.firstName,
      lastName: values.lastName,
      email: values.email,
      phoneNumber: clientNumber,
      password: values.password,
      referrals: values.referral,
    };

    const url = `${baseUrl_}users/register`;

    try {
      axios(url, {
        method: "post",
        headers: {
          "Content-Type": "application/json",
        },
        data: payload,
      })
        .then((res) => {
          // const response = decryptJson(res.data);
          toast(res.data.message);

          setIsLoading(false);
        })
        .catch((err) => {
          setIsLoading(false);

          toast(err);
        });
    } catch (error) {
      console.log(error);
      console.log("edata", payload);
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
      firstName: "",
      lastName: "",
      email: "",
      phoneNumber: "",
      password: "",
      confirmPassword: "",
      referral: "",
    },
    validationSchema: registerSchema,
    onSubmit,
  });

  return (
    <form onSubmit={handleSubmit}>
      <MainForm>
        <ToastContainer />
        {isLoading ? <h3>Loading....</h3> : null}
        <p>*fields are required</p>
        <FormInputs>
          <InputRowNames>
            <FirstName>
              <GlobalInput
                borderBottom="2px solid #a1a1a1"
                borderTop="2px solid #a1a1a1"
                borderLeft="2px solid #a1a1a1"
                borderRight="2px solid #a1a1a1"
                labelText="First Name*"
                labelColor="#696f79"
                labelFontWeight="500px"
                labelFontSize="16px"
                handleBlurInput={handleBlur}
                handleChangeInput={handleChange}
                inputValue={values.firstName}
                inputName="firstName"
                className={
                  errors.firstName && touched.firstName ? "input-error" : ""
                }
              />
              {errors.firstName && touched.firstName ? (
                <h6 className="error-all">{errors.firstName}</h6>
              ) : (
                <h6 className="no-error">first name is required</h6>
              )}
            </FirstName>
            <LastName>
              <GlobalInput
                borderBottom="2px solid #a1a1a1"
                borderTop="2px solid #a1a1a1"
                borderLeft="2px solid #a1a1a1"
                borderRight="2px solid #a1a1a1"
                labelText="Last Name*"
                labelColor="#696f79"
                labelFontWeight="500px"
                labelFontSize="16px"
                handleBlurInput={handleBlur}
                handleChangeInput={handleChange}
                inputValue={values.lastName}
                inputName="lastName"
                className={
                  errors.lastName && touched.lastName ? "input-error" : ""
                }
              />
              {errors.lastName && touched.lastName ? (
                <h6 className="error-all">{errors.lastName}</h6>
              ) : (
                <h6 className="no-error">last name is required</h6>
              )}
            </LastName>
          </InputRowNames>
          <InputRowEmailPhone>
            <EmailSpace>
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
            </EmailSpace>
            <PhoneNumber>
              <label>Phone Number*</label>
              <PhoneInput>
                <FlagSelectInput
                  errorPhone={errors.phoneNumber && touched.phoneNumber}
                >
                  <ReactFlagsSelect
                    borderColor="red"
                    showSelectedLabel={false}
                    selectedSize={mobileScreen ? 21 : 17}
                    searchable={true}
                    // showOptionLabel={false}
                    placeholder="AF"
                    selected={selectedCountryAbbr}
                    onSelect={(abbr) => {
                      const found = Countries[abbr];
                      setSelectedCountryCode(found.secondary || abbr);
                      setSelectedCountryAbbr(abbr);
                    }}
                    customLabels={Countries}
                    showSecondarySelectedLabel={mobileScreen ? false : true}
                  />
                </FlagSelectInput>
                <input
                  onChange={(e) => {
                    const result = new AsYouType(selectedCountryAbbr);
                    result.input(e.target.value);

                    const newData = { ...data };
                    newData[e.target.id] = result.getNationalNumber();
                    setData(newData);

                    setFieldValue("phoneNumber", result.getNationalNumber());
                  }}
                  value={data.phoneNumber}
                  type="text"
                  name="phoneNumber"
                  placeholder="80 000 000 0000"
                  id="phoneNumber"
                  onBlur={handleBlur}
                  className={
                    errors.phoneNumber && touched.phoneNumber
                      ? "number-input-error"
                      : ""
                  }
                />
              </PhoneInput>
              {errors.phoneNumber && touched.phoneNumber ? (
                <h6 className="error-all">{errors.phoneNumber}</h6>
              ) : (
                <h6 className="no-error">phone number is required</h6>
              )}
            </PhoneNumber>
          </InputRowEmailPhone>
          <InputRowPass>
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
                  className={
                    errors.password && touched.password
                      ? "pass-input-error"
                      : ""
                  }
                />
                <EyeIcon error={errors.password && touched.password}>
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
              {errors.password && touched.password ? (
                <h6 className="error-all">{errors.password}</h6>
              ) : (
                <h6 className="no-error">password is required</h6>
              )}
            </PasswordInputOrig>
            <PasswordInputConfirm>
              <label>Confirm Password*</label>
              <PasswordInputIconConfirm>
                <input
                  onChange={handleChange}
                  value={values.confirmPassword}
                  type={passwordShown ? "text" : "password"}
                  name="confirmPassword"
                  placeHolder="************************"
                  id="confirmPassword"
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword
                      ? "pass-input-error"
                      : ""
                  }
                />
                <EyeIcon
                  error={
                    (errors.password && touched.password) ||
                    (errors.confirmPassword && touched.confirmPassword)
                  }
                >
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
              </PasswordInputIconConfirm>
              {errors.confirmPassword && touched.confirmPassword && (
                <h6 className="error-all">{errors.confirmPassword}</h6>
              )}
            </PasswordInputConfirm>
          </InputRowPass>
          <ReferralRow>
            <GlobalInput
              borderBottom="2px solid #a1a1a1"
              borderTop="2px solid #a1a1a1"
              borderLeft="2px solid #a1a1a1"
              borderRight="2px solid #a1a1a1"
              labelText="Referral Code*"
              labelColor="#696f79"
              labelFontWeight="500px"
              labelFontSize="16px"
              handleBlurInput={handleBlur}
              handleChangeInput={handleChange}
              inputValue={values.referral}
              inputName="referral"
              inputPlacholder="111156href"
            />
          </ReferralRow>
          <TermsAndConditions>
            <CheckBox>
              <input
                onChange={handleChange}
                value={values.termsOfService}
                type="checkbox"
                name="termsOfService"
                onBlur={handleBlur}
                className={!values.termsOfService ? "input-error" : ""}
              />
            </CheckBox>
            <span>I agree to the</span>
            <p>Terms & Conditions</p>
          </TermsAndConditions>
          {errors.termsOfService && touched.termsOfService && (
            <h6 className="error-all">{errors.termsOfService}</h6>
          )}
          <SignUp>
            {!errors.email &&
            !errors.password &&
            !errors.firstName &&
            !errors.lastName &&
            !errors.phoneNumber &&
            !errors.termsOfService &&
            values.email &&
            values.password &&
            values.firstName &&
            values.lastName &&
            values.phoneNumber ? (
              <GlobalButton buttonText="Sign Up" disabledButton="false" />
            ) : (
              <GlobalButton buttonText="Sign Up" disabledButton="true" />
            )}
            <label onClick={signIn}>Already have an account? Log In</label>
          </SignUp>
        </FormInputs>
      </MainForm>
    </form>
  );
};

export default register;

const MainForm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 700px;
  height: auto;

  && p {
    width: 137px;
    height: 20px;

    font-family: "Roboto";
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 20px;
    color: #696f79;
  }

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

  @media (max-width: 868px) {
    width: 520px;
    height: auto;

    && p {
      width: 137px;
      height: 20px;
    }
  }

  @media (max-width: 600px) {
    width: 260px;
    height: auto;
    }
  }
`;
const FormInputs = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;

  width: 700px;
  height: auto;

  .error-all {
    color: red;
  }

  @media (max-width: 868px) {
    width: 520px;
    height: auto;
  }

  @media (max-width: 600px) {
    gap: 20px;
    width: 260px;
    height: auto;
  }
`;
const InputRowNames = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 20px;
  margin-top: 20px;

  width: 100%;
  height: auto;

  && input.input-error {
    border: 2px solid red;
  }
  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }

  @media (max-width: 600px) {
    height: auto;
  }
`;
const FirstName = styled.div`
  width: 340px;

  && h6 {
    width: 340px;
  }
  @media (max-width: 868px) {
    && h6 {
      width: 250px;
    }
  }
`;
const LastName = styled.div`
  width: 340px;

  && h6 {
    width: 340px;
  }

  @media (max-width: 868px) {
    && h6 {
      width: 250px;
    }
  }
`;
const InputRowEmailPhone = styled.div`
  display: flex;
  flex-direction: row;
  gap: 20px;
  width: 100%;
  height: auto;

  && input.input-error {
    border: 2px solid red;
  }
  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }
  @media (max-width: 868px) {
    height: auto;
    flex-direction: column;
  }
`;
const EmailSpace = styled.div`
  width: 340px;

  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }

  && h6 {
    width: 340px;
  }
  @media (max-width: 868px) {
    width: 100%;

    && h6 {
      width: 100%;
    }
  }
`;
const PhoneNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  width: 340px;
  height: auto;

  && label {
    display: block;
    color: #696f79;
    font-family: "Roboto";
    font-style: normal;
    font-weight: 400px;
    font-size: 16px;
  }

  && input.number-input-error {
    border: 2px solid red;
    border-left-width: 0px;
  }

  @media (max-width: 868px) {
    width: 100%;
  }
`;
const PhoneInput = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  width: 340px;
  height: 48px;

  //   border: 1px solid #a1a1a1;
  border-radius: 8px;
  border-right-width: 0px;
  border-left-width: 0px;
  border-top-width: 0px;
  border-bottom-width: 0px;

  .error-all {
    color: red;
    visibility: visible;
  }

  .no-error {
    color: red;
    visibility: hidden;
  }

  && h6 {
    width: 340px;
  }

  && input {
    padding: 10px;
    box-sizing: border-box;
    width: 197px;
    height: 48px;
    outline: none;
    border: 2px solid #a1a1a1;
    border-radius: 0px 6px 6px 0px;

    placeholder {
      width: 105px;
      font-family: "Roboto";
      font-style: normal;
      font-weight: 400;
      font-size: 14px;
      color: #8c8c8c;
    }
  }

  @media (max-width: 868px) {
    width: 100%;

    && h6 {
      width: 100%;
    }

    && input {
      width: 70%;
    }
  }
`;
const FlagSelectInput = styled.div`
  box-sizing: border-box;
  width: 145px;
  height: 48px;

  background: #e0e0e0;
  border-width: 2px 0px 2px 2px;
  border-style: solid;
  border-color: ${(props) => (props.errorPhone ? `red` : `#A1A1A1`)};
  border-radius: 8px 0px 0px 8px;

  @media (max-width: 868px) {
    width: 30%;
  }
`;
const InputRowPass = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 20px;

  width: 100%;
  height: 77px;

  && input.input-error {
    border: 2px solid red;
  }

  @media (max-width: 868px) {
    flex-direction: column;
    gap: 20px;

    width: 100%;
    height: auto;
  }
`;
const PasswordInputOrig = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;
  width: 340px;
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
    width: 340px;
  }

  && input.pass-input-error {
    border: 2px solid red;
    border-right-width: 0px;
  }

  @media (max-width: 868px) {
    width: 100%;
    && h6 {
      width: 100%;
    }
  }
`;
const PasswordInputConfirm = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 4px;

  width: 340px;
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

  && h6 {
    width: 340px;
  }

  && input.pass-input-error {
    border: 2px solid red;
    border-right-width: 0px;
  }

  @media (max-width: 868px) {
    width: 100%;
    && h6 {
      width: 340px;
    }
  }
`;
const PasswordInputIconOrig = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 340px;
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
    width: 300px;
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
const PasswordInputIconConfirm = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 340px;
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
    width: 300px;
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
  width: 40px;
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
const ReferralRow = styled.div`
  width: 100%;
  margin-top: 10px;
`;
const TermsAndConditions = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 5px;
  width: 100%;
  height: 24px;
  margin-top: 10px;

  && span {
    font-family: "Roboto";
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 22px;
    color: #000000;
  }

  && p {
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
  && input[type="checkbox"].input-error {
    border: 2px solid red;
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
