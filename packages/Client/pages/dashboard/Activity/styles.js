import styled from "styled-components";
import { MainContainer } from "@styles/index";

export const ActivityContainer = styled(MainContainer)`
    background-color: ${({ theme }) => theme.shader.primary};
    border-radius: 4px;
    overflow: hidden;
`;

export const ContentActivity = styled.div`
    width: 100%;
    height: 100%;
    padding: 16px 0px;
    overflow: hidden;
`;
