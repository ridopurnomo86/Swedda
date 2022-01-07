import styled from "styled-components";
import { devices } from "../../../styles/breakpoint";

export const ListSectionContainer = styled.div`
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
export const SubTitle = styled.p`
    width: 100%;
    font-size: 14px;

    @media ${devices.mobileL} {
        width: 50%;
        font-size: 16px;
    }
`;