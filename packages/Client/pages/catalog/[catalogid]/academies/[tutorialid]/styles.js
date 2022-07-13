import styled from "styled-components";
import { MainContainer } from "styles";
import { devices } from "styles/breakpoint";

export const TutorialContainer = styled(MainContainer)`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 100%;
    gap: 24px;
    margin-bottom: 64px;

    @media ${devices.tabletM} {
        grid-template-columns: 20% 80%;
    }
`;
