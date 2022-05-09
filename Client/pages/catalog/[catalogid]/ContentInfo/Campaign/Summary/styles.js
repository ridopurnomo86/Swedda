import styled from "styled-components";

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const TextContent = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 16px;
`;

export const SummaryContainer = styled.div``;

export const SummaryContent = styled.div`
    border-bottom: 1px solid ${({ theme }) => theme.shader.secondary};
    padding-bottom: 0px;
    margin-bottom: 24px;
`;
