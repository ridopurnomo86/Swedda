import styled from "styled-components";

export const CampaignContainer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const TextContent = styled.p`
    font-size: 14px;
    font-weight: 400;
`;
