import styled from "styled-components";
import { MainContainer } from "../../../styles";


export const FooterContainer = styled.footer`
    width: 100%;
    margin-top: 32px;
    background-color: #252328;
    padding: 48px 0px;
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
`;

export const Container = styled(MainContainer)`
    display: flex;
`;

export const InfoContainer = styled.div``;

export const ListLink = styled.div`
    margin: 0px 16px;
`;

export const SupportList = styled.div`
    margin: 0px 16px;
`;

export const TextInfo = styled.div`
    font-size: 14px;
    font-weight: 400;
    max-width: 300px;
`;