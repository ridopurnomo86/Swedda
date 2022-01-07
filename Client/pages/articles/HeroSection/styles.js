import styled from "styled-components";
import { devices } from "../../../styles/breakpoint";

export const HeroContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    min-height: 50vh;
    width: 100%;
`;

export const TitleHero = styled.p`
    font-size: 40px;
    font-weight: 700;
    
    @media ${devices.mobileL} {
        font-size: 64px;
    }
    @media ${devices.mobileM} {
        font-size: 56px;
    }
`;
export const SubtitleHero = styled.p`
    width: 90%;
    text-align: center;
    font-size: 14px;

    @media ${devices.mobileL} {
        width: 50%;
        text-align: center;
        font-size: 16px;
    }
    
`;