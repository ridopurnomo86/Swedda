import { createGlobalStyle } from "styled-components";
import styled from "styled-components";

export const GlobalStyle = createGlobalStyle`
  html,body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }



  a {
    color: inherit;
    text-decoration: none;
  }

`;

export const MainContainer = styled.div`
    margin-right: auto;
    margin-left: auto;
    padding: 0 15px;
    box-sizing: border-box;
    width: 100%;

    @media (min-width: 600px) {
        max-width: 100%;
    }
    @media (min-width: 768px) {
        max-width: 860px;
    }
    @media (min-width: 968px) {
        max-width: 900px;
    }
    @media (min-width: 1024px) {
        max-width: 90%;
    }
    @media (min-width: 1200px) {
        max-width: 90%;
    }
    @media (min-width: 1440px) {
        max-width: 1480px;
    }
    @media (min-width: 1689px) {
        max-width: 1600px;
    }
`;
