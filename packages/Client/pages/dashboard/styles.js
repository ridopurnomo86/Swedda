import styled from "styled-components";

export const DashboardContainer = styled.div`
    width: 100%;
    min-height: 100vh;
`;

export const GridContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(500px, auto));
    grid-gap: 32px;
    padding: 0px 32px;
`;
