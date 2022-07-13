import styled from "styled-components";

export const CardArticleContainer = styled.div`
    overflow: hidden;
    border-radius: 4px;
    max-width: 300px;
    min-height: 350px;
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    background-color: ${({ theme }) => theme.shader.primary};
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;

    .grey {
        color: ${({ theme }) => theme.shader.secondaryOptional};
    }
`;

export const ContentInfo = styled.div`
    padding: 16px 24px;
`;

export const TitleText = styled.p`
    font-size: 14px;
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
    color: #000000;
`;

export const DescriptionText = styled.p`
    font-size: 12px;
    margin-top: 16px;
    color: ${({ theme }) => theme.shader.secondaryOptional};
    font-weight: 600;
    display: -webkit-box;
    -webkit-line-clamp: 3;
    -webkit-box-orient: vertical;
    overflow: hidden;
    text-overflow: ellipsis;
`;

export const DateText = styled.p`
    font-size: 14px;
    font-weight: 600;
    color: ${({ theme }) => theme.shader.secondaryOptional};
`;

export const Image = styled.img`
    width: 100%;
    height: 150px;
    object-fit: cover;
    overflow: hidden;
`;

export const ActionInfo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top: 1px solid ${({ theme }) => theme.shader.secondaryOptional};
    padding: 16px;
`;

export const ViewMoreText = styled.p`
    font-size: 14px;
    margin-right: 8px;
    font-weight: 600;
    color: ${({ theme }) => theme.shader.secondaryOptional};
`;

export const ViewMoreWrapper = styled.div`
    cursor: pointer;
    align-items: center;
    display: flex;
`;
