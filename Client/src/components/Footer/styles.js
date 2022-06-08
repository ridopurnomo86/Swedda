import styled from "styled-components";
import { MainContainer } from "../../../styles";
import { devices } from "../../../styles/breakpoint";

export const FooterContainer = styled.footer`
    width: 100%;
    background-color: rgba(0, 0, 0, 0.9);
    padding: 24px 0px;
    color: ${({ theme }) => theme.shader.primary};

    .mx-s {
        margin: 8px 0px;
    }
    .semibold {
        font-weight: 500;
    }
    .pointer {
        cursor: pointer;
    }
    @media ${devices.mobileL} {
        padding: 48px 0px;
    }
`;

export const Container = styled(MainContainer)`
    display: flex;
    flex-direction: column;

    @media ${devices.mobileL} {
        flex-direction: row;
    }
`;

export const InfoContainer = styled.div`
    margin: 0px 0px 24px 0px;
`;

export const TextInfo = styled.div`
    font-size: 14px;
    font-weight: 400;
    max-width: 300px;
    margin-top: 24px;
`;

export const Copyright = styled(MainContainer)`
    display: flex;
    align-items: center;
    justify-content: center;
    border-top: 1px solid ${({ theme }) => theme.shader.primary};
    margin-top: 64px;
`;
