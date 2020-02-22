import styled, { keyframes } from "styled-components";

const PulseOut = keyframes`
    to{
        transform: scale(1);
    }
    from{
        transform: scale(1.5);
    }
`;

const Loading = styled.div`
  font-size: 2rem;
  color: #999999;
  font-weight: bolder;

  height: 10rem;
  display: flex;
  align-items: center;
  justify-content: center;

  animation: ${PulseOut} infinite 3s alternate ease-in-out;
`;

export default Loading;
