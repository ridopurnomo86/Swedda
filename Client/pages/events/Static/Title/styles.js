import styled from "styled-components";
import { devices } from "../../../../styles/breakpoint";

export const TitleContainer = styled.p`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    margin: 32px 0px 64px 0px;
`;

export const TitleText = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
    text-align: center;

    @media ${devices.mobileM} {
        font-size: 32px;
    }
`;

export const QuoteText = styled.p`
    font-size: 16px;
    font-weight: 400;
    max-width: 500px;
    text-align: center;
    margin-bottom: 16px;
`;
