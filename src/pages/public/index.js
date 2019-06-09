import React from "react";
import { NavLink } from "react-router-dom";
import styled, {keyframes} from "styled-components";

import Background from "../images/homepage_bg.png";
import Logo from "../images/logo--white.svg";
import DownArrow from "../images/down-arrow.svg";

const index = () => {
  return (
    <>
      <LoginWrapper>
        <div>
          <img src={Logo} alt="Unset Logo" width="60%" />
          <h1>Unplan your day</h1>
          <More src={DownArrow} alt="There's More" />
        </div>
      </LoginWrapper>
      <AboutUs>
        <h2>Sometimes life needs a bit less planning.</h2>
        <hr />
        <p>
          We provide a suite of tools that help you plan your best life, all{" "}
          <strong>without</strong> any dated milestones which you probably
          miss anyway. We will launch soon, join us in getting your life back
          on new terms.
        </p>
        <Grid>
          <div>
            <h3>Goals</h3>
            {/* TODO: add in icons */}
            <p>
              Define what you want to acomplish and how you want to accomplish
              it.
            </p>
          </div>
          <div>
            <h3>Supports</h3>
            {/* TODO: add in icons */}
            <p>
              How you plan to finish your goal, and in what way can you
              accomplish that goal.
            </p>
          </div>
          <div>
            <h3>Community</h3>
            {/* TODO: add in icons */}
            <p>
              Get help and suppot from our amazing community.
            </p>
          </div>
        </Grid>
      </AboutUs>
    </>
  );
};

export default index;


// TODO: create a common style file
const LoginWrapper = styled.div`
  width: 100vw;
  height: 100vh;

  overflow: hidden;

  background: #393e46 url(${Background}) no-repeat;
  background-size: cover;

  display: flex;

  align-items: center;
  justify-content: center;

  margin-left: -25rem;
  @media (max-width: 1500px) {
    margin-left: 0px;
  }

  div {
    height: 50vh;
    padding: 2rem;
    text-align: center;

    h1{
      color: #ffffff;
      text-transform: uppercase;
    }
  }
`;

const AboutUs = styled.div`
  background: #fd7014;
  margin: 0;
  padding: 0 15rem;

  height: 100vh;

  h2 {
    color: #ffffff;
    font-weight: 500;
    letter-spacing: 0.2rem;
    text-transform: uppercase;

    margin: 0;
    padding-top: 2.5rem;
  }
  p {
    color: #222222;
    font-size: 1.7rem;
    strong {
      color: #142976;
    }
  }
  hr {
    border: 5px solid #333333;
    margin-left: -20rem;
    width: 59rem;
  }
`;

const Grid = styled.div`
display: grid;
grid-template-columns: repeat(3, 1fr);
grid-gap: 1rem;

text-align: center;

p{
  font-size: 1rem;
}
`

const upDown = keyframes`
from{
  transform: translate( 0rem, 0rem);
  opacity: 0.2;
}
to{
  transform: translate( 0rem, 1rem);
  opacity: 1;
}
`

const More = styled.img`
  animation: ${upDown} 2s linear alternate infinite;
  margin-top: 10vh;
`;
