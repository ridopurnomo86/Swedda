import styled from "styled-components";

export const CampaignContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
    display: grid;
    grid-column-gap: 64px;
    grid-row-gap: 32px;
    grid-template-columns: repeat(auto-fit, minmax(500px, auto));
`;
