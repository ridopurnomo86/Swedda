import styled from "styled-components";

export const EmptyStateContainer = styled.div`
    padding: 16px;
    margin: 16px;
    border: 2px solid ${({ theme }) => theme.shader.secondaryOptional};
    border-radius: 4px;
    color: ${({ theme }) => theme.shader.secondaryOptional};
`;

export const TitleText = styled.p`
    font-size: 18px;
    font-weight: 600;
    margin-top: 16px;
`;

export const NotificationIcon = styled.i.attrs({
    className: "fa-solid fa-circle-exclamation fa-2xl",
})``;
