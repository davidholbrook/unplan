import React from "react";
import { NavLink } from "react-router-dom";
import styled, { keyframes, createGlobalStyle } from "styled-components";

import Background from "../../images/homepage_bg.png";
import Logo from "../../images/logo--white.svg";
import DownArrow from "../../images/down-arrow.svg";

const index = () => {
  const GlobalStyle = createGlobalStyle`
  body{
    background: #333333 url(${Background}) repeat-x !important;
  }
`;
  return (
    <>
      <GlobalStyle />
      <div className="grid-x">
        <Wrapper className="cell small-6 small-offset-3 medium-offset-3">
          <img src={Logo} alt="Unset Logo" width="60%" />
          <h1>Unplan your day</h1>
          <Button className="button expanded">Login</Button>
          <More src={DownArrow} alt="There's More" />
        </Wrapper>
      </div>
    </>
  );
};

export default index;

const Wrapper = styled.div`
  text-align: center;
  margin-top: 30vh;

  h1 {
    color: rgba(255, 255, 255, 0.5);
    text-transform: uppercase;
    font-weight: 700;

    margin: 2rem 0;
  }
`;

const Button = styled.button`
  background-color: #fd7014;
`;

const upDown = keyframes`
from{
  transform: translate( 0rem, 0rem);
  opacity: 0.2;
}
to{
  transform: translate( 0rem, 1rem);
  opacity: 1;
}
`;

const More = styled.img`
  animation: ${upDown} 2s linear alternate infinite;
  margin-top: 10vh;
`;
