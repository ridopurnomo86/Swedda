import styled from "styled-components";
import { devices } from "@styles/breakpoint";

export const ListSectionContainer = styled.div`
    margin: 64px 0px;
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
    margin-top: 8px;

    @media ${devices.mobileL} {
        width: 50%;
        font-size: 16px;
    }
`;

export const CardDisplay = styled.div`
    margin-top: 40px;
    display: grid;
    border-top: 2px solid ${({ theme }) => theme.shader.secondaryOptional};
    padding-top: 40px;
    align-items: center;
    justify-content: center;
    grid-template-columns: repeat(auto-fit, minmax(300px, auto));
    grid-gap: 32px;
`;
