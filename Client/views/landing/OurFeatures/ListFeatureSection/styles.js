import styled from "styled-components";
import { devices } from "styles/breakpoint";

export const Wrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;

    @media ${devices.mobileL} {
        flex-direction: row;
    }
`;

export const CardSectionContainer = styled.div`
    max-width: 340px;
    max-height: 240px;
    margin: 0px 0px 32px 0px;

    @media ${devices.mobileL} {
        margin: 0px 32px 0px 0px;
    }
`;

export const CardSection = styled.div`
    padding: 24px;
    border-radius: 16px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background: ${({ theme }) => theme.shader.primary};
    color: ${({ theme }) => theme.shader.secondary};
    white-space: normal;
    width: 100%;
    height: 100%;
    transition: 0.3s;
    cursor: default;
    &:hover {
        background-color: ${({ theme }) => theme.main.primary};
        color: ${({ theme }) => theme.shader.primary};
    }
`;

export const CardSectionTitle = styled.p`
    font-size: 24px;
    font-weight: 600;
    margin-top: 14px;
    margin-bottom: 20px;
`;

export const CardSectionInfo = styled.p`
    font-size: 16px;
`;
