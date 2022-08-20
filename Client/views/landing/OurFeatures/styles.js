import styled from "styled-components";
import { devices } from "styles/breakpoint";
import { MainContainer } from "styles/index";

export const Wrapper = styled.div`
    margin: 128px 0px;
    padding: 0px 24px;
`;

export const OurFeaturesContainer = styled(MainContainer)`
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
