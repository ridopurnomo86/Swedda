import styled from "styled-components";
import { devices } from "@styles/breakpoint";

export const SignupSectionContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 0px 0px 64px 0px;
    background-color: ${({ theme }) => theme.shader.primary};

    .image {
        border-radius: 0px;
        max-width: 100%;

        @media ${devices.tabletS} {
            border-radius: 8px;
        }
    }

    @media ${devices.tabletS} {
        flex-direction: row;
        padding: 64px 0px;
        align-items: center;
    }
`;

export const TextContent = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0px 0px;
    margin: 32px 0px 0px 0px;
    padding: 0px 32px;

    @media ${devices.tabletS} {
        padding: 0px 64px;
        align-items: flex-start;
    }
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 12px;
`;

export const Text = styled.p`
    max-width: 300px;
    margin-bottom: 32px;
`;
