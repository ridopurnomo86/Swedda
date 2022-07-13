import styled from "styled-components";
import { MainContainer } from "@styles/index";
import { devices } from "@styles/breakpoint";

export const InfoEventContainer = styled(MainContainer)`
    margin-top: 320px;
    margin-bottom: 128px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

export const TitleEvent = styled.p`
    font-size: 32px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const TitleText = styled.p`
    font-size: 16px;
    font-weight: 400;
`;

export const FlexInfo = styled.div`
    display: flex;
    justify-content: center;
    margin-top: 32px;
    gap: 64px;
    flex-wrap: wrap;
    align-items: center;

    @media ${devices.tabletL} {
        flex-wrap: no-wrap;
        justify-content: space-between;
    }
`;
