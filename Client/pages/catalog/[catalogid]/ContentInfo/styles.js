import styled from "styled-components";

export const ContentInfoContainer = styled.div`
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 8px;
    padding: 24px;
    margin-top: 24px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;
