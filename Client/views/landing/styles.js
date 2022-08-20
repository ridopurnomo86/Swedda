import styled from "styled-components";

const LandingPageContainer = styled.div`
    min-height: 100vh;
    background-color: ${({ theme }) => theme.bg.primary};
    padding-top: 32px;
`;

export default LandingPageContainer;
