import styled from "styled-components";
import { devices } from "../../../../../styles/breakpoint";

export const CardWrapper = styled.div`
    overflow: hidden;
    border-radius: 6px;
    background-color: ${({ theme }) => theme.shader.primary};
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    @media ${devices.tabletS} {
        flex-direction: row;
        max-height: 500px;
    }
`;

export const Content = styled.div`
    padding: 32px;
`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400px;
    text-align: justify;
    max-width: 900px;
`;

export const DirectingBy = styled.p`
    margin-top: 16px;
    font-size: 16px;
    font-weight: 600;
`;
