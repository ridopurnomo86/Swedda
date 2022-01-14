import styled from "styled-components";
import { devices } from "../../../../styles/breakpoint";

export const OurFeaturesContainer = styled.div`
    margin-top: 64px;
    padding: 24px;
    display: flex;
    flex-direction: column;
    border-radius: 16px;
    background: ${({ theme }) => theme.shader.secondary};
    color: ${({ theme }) => theme.shader.primary};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    @media ${devices.mobileL} {
        padding: 64px;
    }
    @media ${devices.laptopM} {
        flex-direction: row;
    }
`;

export const Section = styled.div`
    margin-right: 0px;
    border-bottom: 2px solid ${({ theme }) => theme.shader.primary};
    margin-bottom: 32px;
    padding-bottom: 32px;

    @media ${devices.laptopM} {
        margin: 0 64px 0px 0px;
        padding: 0;
    }
`;

export const SectionTitle = styled.p`
    font-size: 32px;
    font-weight: 700;

    @media ${devices.laptopM} {
        font-size: 40px;
    }
`;
export const SectionSubtitle = styled.p`
    margin-top: 24px;
    font-size: 16px;
    max-width: 300px;
`;

export const ListFeaturesSection = styled.div`
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
