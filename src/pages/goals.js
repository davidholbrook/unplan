import React from "react";
import styled from "styled-components";
import GoalsIcon from "../components/icons/goals";

const Goals = () => {
  return (
    <div>
      <h1>
        <GoalsIcon iconFill="#fd7014" />
        <Title>Your Goals</Title>
      </h1>
      <p>
        Goals are important to keep your life in line. Below is your list of
        goals that you are currently tracking.
      </p>
    </div>
  );
};

export default Goals;

const Title = styled.strong`
  text-transform: uppercase;
  color: #fd7014;
`;
