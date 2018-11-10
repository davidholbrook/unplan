import React from "react";
import Helmet from "react-helmet";
import styled, { css } from "styled-components";

import profilePic from "../images/profile-image.jpg";
import Goals from "../components/icons/goals";
import Support from "../components/icons/support";

const Index = () => {
  return (
    <div>
      <Helmet title="Unplan | David's Dashboard" />
      <Welcome>
        <Details>
          <h2>Welcome, David!</h2>
          <span>
            <Meter>
              <Goals />0
            </Meter>
            <Meter active>
              <Support iconFill="#FD7014" />6
            </Meter>
          </span>
        </Details>
      </Welcome>

      <List />
    </div>
  );
};

export default Index;

const Welcome = styled.div`
  background: #ffffff url(${profilePic}) center no-repeat;
  background-blend-mode: multiply;

  width: 98%;
  max-width: 1000px;
  height: 19rem;

  border-radius: 10px;

  display: flex;
  align-items: flex-end;

  margin: 1rem 0 0 0;
`;

const Details = styled.div`
  background: #eeeeee;
  @supports (background: rgba(255, 255, 255, 0.8)) {
    background: rgba(255, 255, 255, 0.8);
  }

  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;

  width: 100%;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  h2 {
    font-size: 3rem;
    font-family: "Fira Sans", sans-serif;
    font-weight: 300;

    margin: 1rem 0;
  }
`;

const Meter = styled.div`
  border: #393e46 3px solid;
  border-radius: 10px;

  display: inline-block;
  padding: 1rem;
  margin-right: 1rem;

  font-size: 3.7rem;
  font-weight: lighter;

  vertical-align: center;
  line-height: 0;
  font-family: "Fira Sans", sans-serif;

  svg {
    margin-right: 1.2rem;
  }

  ${props =>
    props.active &&
    css`
      border-color: #fd7014;
      color: #fd7014;
    `}
`;

const List = styled.div``;
