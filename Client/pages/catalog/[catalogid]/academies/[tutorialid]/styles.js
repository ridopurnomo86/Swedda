import styled from "styled-components";
import { MainContainer } from "styles";

export const TutorialContainer = styled(MainContainer)`
    min-height: 100vh;
    display: grid;
    grid-template-columns: 20% 80%;
    gap: 24px;
    margin-bottom: 64px;
`;
