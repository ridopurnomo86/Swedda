import styled from "styled-components";

export const CommentContianer = styled.div`
    width: 100%;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const CommentWrapper = styled.div`
    padding: 16px;
    border-top: 1px solid ${({ theme }) => theme.shader.secondaryOptional};
    border-radius: 4px;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const Author = styled.p`
    font-size: 18px;
    font-weight: 700;
    margin-bottom: 16px;
`;

export const TitleComment = styled.p`
    font-size: 14px;
    font-weight: 600;
    margin-bottom: 8px;
`;

export const TextContent = styled.p`
    font-size: 14px;
    font-weight: 400;
`;
