import styled from "styled-components";

export const CardCatalogContainer = styled.div`
    width: 100%;
    aspect-ratio: 4 / 2;
    background: linear-gradient(to top, rgba(0, 0, 0, 1) 10%, rgba(0, 0, 0, 0.4) 100%),
        url(${({ source }) => source}) no-repeat center center;
    background-size: cover;
    padding: 16px;
    border-radius: 4px;
    color: ${({ theme }) => theme.shader.primary};
    position: relative;
    overflow: hidden;
    cursor: pointer;
    transition: 0.3s;

    &:hover {
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
    }
`;

export const TitleText = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const SubtitleText = styled.p`
    font-size: 14px;
    font-weight: 500;
    overflow: hidden;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
`;

export const TextContainer = styled.div`
    position: absolute;
    bottom: 0;
    margin-bottom: 24px;
`;
