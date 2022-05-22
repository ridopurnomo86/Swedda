import styled from "styled-components";
import { devices } from "@styles/breakpoint";

export const InfoContainer = styled.div`
    padding: 24px;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
    text-align: justify;
    max-width: 100%;
    color: ${({ theme }) => theme.shader.secondary};

    @media ${devices.tabletM} {
        max-width: 50%;
    }
`;
