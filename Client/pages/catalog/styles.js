import styled from "styled-components";
import { MainContainer } from "../../styles";

export const CatalogContainer = styled(MainContainer)`
    width: 100%;
    min-height: 100vh;
    margin-bottom: 40px;
`;

export const CardDisplay = styled.div`
    margin-top: 40px;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, auto));
    grid-gap: 32px;
`;

export const TitleContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const SubtitleText = styled.p`
    font-size: 14px;
    margin-top: 16px;
    max-width: 500px;
    text-align: center;
    font-weight: 500;
`;
