import styled from "styled-components";

export const BannerContainer = styled.div`
    background-color: ${({ theme }) => theme.main.primary};
    padding: 32px 0px;
    color: ${({ theme }) => theme.shader.primary}; 
`;


export const BannerTitle = styled.p`
    font-size: 24px;
    font-weight: 700
`;

export const BannerContent = styled.p`
    font-size: 16px;
    font-weight: 400;
`;