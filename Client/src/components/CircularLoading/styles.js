import styled from "styled-components";
import { keyframes } from "styled-components";

const rotate = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`;

export const Loader = styled.div`
    margin: 0 auto;
    border: 3px solid #f3f3f3;
    border-radius: 50%;
    border-top: 3px solid #3498db;
    width: 24px;
    height: 24px;
    -webkit-animation: ${rotate} 2s linear infinite; /* Safari */
    animation: ${rotate} 2s linear infinite;
`;
