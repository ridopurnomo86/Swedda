import styled from "styled-components";
import { devices } from "../../../../styles/breakpoint";

export const HeroContainer = styled.div`
    width: 100%;
    background: linear-gradient(to bottom, rgba(0, 0, 0, 0.6) 0%, rgba(0, 0, 0, 0.8) 100%),
        url(https://source.unsplash.com/nF0nQuqBsrI) no-repeat center center;
    background-size: cover;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    object-fit: cover;
    border-radius: 16px;
    padding: 24px;

    @media ${devices.mobileL} {
        padding: 80px 64px;
    }
`;

export const ChildTitle = styled.p`
    font-size: 16px;
    font-weight: 600;
    color: ${({ theme }) => theme.shader.primary};
`;

export const HeroTitle = styled.p`
    font-size: 32px;
    color: ${({ theme }) => theme.shader.primary};
    font-weight: 700;

    @media ${devices.mobileL} {
        font-size: 40px;
    }
`;

export const SubTitle = styled.p`
    color: ${({ theme }) => theme.shader.primary};
    font-size: 18px;
    font-weight: 400;
    max-width: 500px;
    margin-top: 32px;
`;
