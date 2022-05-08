import styled from "styled-components";
import { createGlobalStyle } from "styled-components";
import { devices } from "./breakpoint";

export const GlobalStyle = createGlobalStyle`
  html {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Montserrat', sans-serif;
  }

  * {
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    box-sizing: border-box;
  }

  body {
      background-color: #EFEFF1;
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  ::-webkit-scrollbar {
    width: 8px;
    transition: 0.3s;

  }
  
  /* Track */
  ::-webkit-scrollbar-track {
    background: #e7ebed; 
    }
  
  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: #323330; 
    border-radius: 8px;
  }

  @media (prefers-reduces-motion: reduce) {
    * {
      animation-duration: 0.01ms !important;
      animation-iteration-count: 1 !important;
      transition-duration: 0.01ms !imporatant;
      scroll-behavior: auto !important;
    }
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

export const NavbarTopSpacing = styled.div`
    padding-top: 30px;
    background-color: ${({ theme }) => theme.bg.primary};

    @media ${devices.mobileL} {
        padding-top: 120px;
    }
`;
