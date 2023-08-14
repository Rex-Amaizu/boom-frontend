import React from "react";
import styled from "styled-components";

const GlobalButton = ({
  buttonText,
  width,
  height,
  fontS,
  fontW,
  disabledButton,
}) => {
  return (
    <ButtonGroup width={width} height={height} fontS={fontS} fontW={fontW}>
      {disabledButton === "true" ? (
        <button disabled>{buttonText}</button>
      ) : (
        <button>{buttonText}</button>
      )}
    </ButtonGroup>
  );
};

export default GlobalButton;

const ButtonGroup = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ width }) => width || "100%"};
  height: ${({ height }) => height || "54px"};
  cursor: pointer;

  && button {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    cursor: pointer;
    background-color: #0a2640;
    color: #ffffff;
    font-size: ${({ fontS }) => fontS || "24px"};
    font-weight: ${({ fontW }) => fontW || "600px"};

    &:hover {
      background-color: #11416e;
  }

  &:disabled {
    background-color: #a6a6a6;
    cursor: not-allowed;
  }

`;
