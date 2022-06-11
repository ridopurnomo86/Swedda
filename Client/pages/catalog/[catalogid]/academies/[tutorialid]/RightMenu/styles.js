import styled from "styled-components";
import { MainContainer } from "styles";

export const RightMenuContainer = styled(MainContainer)`
    width: 100%;
    position: relative;
    border: 1px solid ${({ theme }) => theme.shader.secondary};
    border-radius: 8px;
    padding: 32px;
`;

export const ButtonContainer = styled.div``;

export const FlexContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 64px;
`;
