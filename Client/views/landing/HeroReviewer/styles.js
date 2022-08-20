import styled from "styled-components";
import { MainContainer } from "styles/index";
import { devices } from "styles/breakpoint";

export const Wrapper = styled.div`
    padding: 0px 24px;
    padding-bottom: 128px;
`;

export const HeroContainer = styled(MainContainer)`
    width: 100%;
    background: linear-gradient(to right, rgba(0, 0, 0, 1) 40%, rgba(0, 0, 0, 0.2) 100%),
        url(https://source.unsplash.com/6bKpHAun4d8) no-repeat center center;
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    object-fit: cover;
    border-radius: 16px;
    margin-top: 64px;
    padding: 24px;
    color: ${({ theme }) => theme.shader.primary};

    @media ${devices.mobileL} {
        padding: 48px 64px;
    }
`;

export const InfoContent = styled.div``;

export const HeroTitle = styled.p`
    font-size: 28px;
    font-weight: 700;

    @media ${devices.mobileL} {
        font-size: 40px;
    }
`;

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    max-width: 500px;
    margin-top: 32px;

    @media ${devices.mobileL} {
        font-size: 18px;
    }
`;
