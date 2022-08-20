import styled from "styled-components";
import { devices } from "styles/breakpoint";

export const SectionContainer = styled.div`
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
