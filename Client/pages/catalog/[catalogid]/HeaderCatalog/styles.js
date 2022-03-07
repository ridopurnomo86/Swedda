import styled from "styled-components";

export const HeaderCatalogContainer = styled.div`
    width: 100%;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    border-radius: 8px;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const InfoContainer = styled.div`
    padding: 24px;
`;

export const Title = styled.p`
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const Subtitle = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-top: 20px;
    text-align: justify;
    max-width: 50%;
    color: ${({ theme }) => theme.shader.secondary};
`;
