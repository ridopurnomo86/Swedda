import styled from "styled-components";

export const DescriptionContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const Title = styled.p`
    font-size: 20px;
    font-weight: 700;
    margin-bottom: 16px;
`;
