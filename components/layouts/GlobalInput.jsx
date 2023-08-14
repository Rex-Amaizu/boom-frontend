import React from "react";
import styled from "styled-components";

const GlobalInput = ({
  width,
  height,
  fullwidth,
  inputName,
  inputPlacholder,
  labelText,
  labelColor,
  inputType,
  borderLeft,
  borderRight,
  borderTop,
  borderBottom,
  inputPadding,
  labelFontWeight,
  labelFontSize,
  borderRadius,
  inputFontWeight,
  inputFontSize,
  inputBgColor,
  placeholderColor,
  handleBlurInput,
  handleChangeInput,
  inputValue,
  error,
  errorMsg,
  ...rest
}) => {
  return (
    <InputGroup
      width={width}
      height={height}
      fullwidth={fullwidth}
      labelColor={labelColor}
      borderLeft={borderLeft}
      borderRight={borderRight}
      borderTop={borderTop}
      borderBottom={borderBottom}
      inputPadding={inputPadding}
      labelFontWeight={labelFontWeight}
      labelFontSize={labelFontSize}
      borderRadius={borderRadius}
      inputFontWeight={inputFontWeight}
      inputFontSize={inputFontSize}
      inputBgColor={inputBgColor}
      placeholderColor={placeholderColor}
    >
      <label htmlFor={inputName}>{labelText}</label>
      <input
        type={inputType || "text"}
        placeholder={inputPlacholder}
        name={inputName}
        id={inputName}
        value={inputValue}
        onBlur={handleBlurInput}
        onChange={handleChangeInput}
        className={error ? "invalid" : ""}
        {...rest}
      />
      {error && <FieldError>{errorMsg}</FieldError>}
    </InputGroup>
  );
};

export default GlobalInput;

const InputGroup = styled.div`
    // grid-column: ${({ fullwidth }) => (fullwidth ? "1 / 3" : "")};
    display: flex;
    flex-direction: column;
    gap: 2px;

    && label {
        display: block;
        // margin-bottom: 8px;
        color: ${({ labelColor }) => labelColor || "#696f79"};
        font-family: "Roboto";
        font-style: normal;
        font-weight: ${({ labelFontWeight }) => labelFontWeight || "400px"};
        font-size: ${({ labelFontSize }) => labelFontSize || "14px"};
        // line-height: 20px;
    }

    input,
    select {
        width: ${({ width }) => width || "100%"};
        height: ${({ height }) => height || "48px"};
        padding: ${({ inputPadding }) => inputPadding || "10px"};
        border-left: ${({ borderLeft }) => borderLeft || "1px solid #a1a1a1"};
        border-top: ${({ borderTop }) => borderTop || "1px solid #a1a1a1"};
        border-right: ${({ borderRight }) =>
          borderRight || "1px solid #a1a1a1"};
        border-bottom: ${({ borderBottom }) =>
          borderBottom || "1px solid #a1a1a1"};
        border-radius: ${({ borderRadius }) =>
          borderRadius || "8px 8px 8px 8px"};
        font-size: ${({ inputFontSize }) => inputFontSize || "14px"};
        background-color: ${({ inputBgColor }) => inputBgColor || "#ffffff"};
        // line-height: 1.25;

        // outline-color: red;
    
        &:disabled {
          background-color: #d4d4d4;
          cursor: not-allowed;
        }
      }
    
      .invalid {
        border-color: red;
        outline-color: red;
      }

      input::placeholder {
        color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"}
      }

      input:-ms-input-placeholder {
        // Internet Explorer 10-11
        color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"}
      }

      
      input::-ms-input-placeholder {
        // Microsoft Edge
        color: ${({ placeholderColor }) => placeholderColor || "#8c8c8c"}
      }
    }
`;

const FieldError = styled.div`
  margin-top: ${({ mt }) => mt || "6px"};
  margin-left: ${({ ml }) => ml || "10px"};
  margin-bottom: ${({ mb }) => mb || 0};
  text-align: ${({ align }) => align || "left"};
  color: red;
  font-size: ${({ fs }) => fs || "13px"};
`;
