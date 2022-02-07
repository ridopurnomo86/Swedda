import styled, { keyframes } from "styled-components";

const loadingAnimation = keyframes`
  0% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

export const SkeletonWrapper = styled.div`
    width: ${({ width }) => width ? width : "100%"};
    height: ${({height}) => height ? height : "32px"};
    border-radius: 5px;
    background: rgb(226,232,240);
    background: linear-gradient( 
        90deg,     
        rgba(230, 230, 230, 0.8) 25%,
        rgba(210, 210, 210, 0.9) 37%,
        rgba(230, 230, 230, 0.8) 63% 
    );
    background-size: 400% 100%;
    animation: ${loadingAnimation} 2s ease infinite;
`;