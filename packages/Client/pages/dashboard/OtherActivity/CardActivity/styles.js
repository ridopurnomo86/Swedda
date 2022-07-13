import styled from "styled-components";

export const CardActivityContainer = styled.div`
    padding: 16px;
    border-radius: 4px;
    margin-bottom: 8px;
    background-color: ${({ theme }) => theme.bg.primary};
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const TitleText = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const SubtitleText = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin-bottom: 8px;
`;

export const ContentContainer = styled.div``;

export const EllipsisIcon = styled.i.attrs({
    className: "fa-solid fa-ellipsis-vertical fa-xl",
})`
    cursor: pointer;
`;
