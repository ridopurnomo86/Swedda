import styled from "styled-components";

export const HeaderContainer = styled.div`
    padding: 16px;
    display: flex;
    align-items: center;
    border-bottom: 1px solid ${({ theme }) => theme.shader.secondaryOptional};
`;

export const TitleText = styled.p`
    font-size: 16px;
    font-weight: 600;
`;

export const BookIcon = styled.i.attrs({
    className: "fa fa-book",
})`
    margin-right: 16px;
`;
