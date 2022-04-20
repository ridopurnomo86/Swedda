import styled from "styled-components";

export const ProfileMenuContainer = styled.div`
    cursor: pointer;
    position: relative;
`;

export const TitleText = styled.p`
    font-size: 18px;
    font-weight: 700;
    padding: 10px 0px;
    color: ${({ theme }) => theme.shader.primary};
`;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 32px;
    color: ${({ theme }) => theme.shader.primary};
    justify-content: space-between;
`;

export const MenuListContainer = styled.div`
    padding: 0px 32px;
`;

export const MenuList = styled.div`
    padding: 10px 0px;
    border-bottom: 2px solid ${({ theme }) => theme.shader.secondary};
`;

export const ArrowRight = styled.i.attrs({
    className: "fa fa-angle-right",
})`
    font-size: 24px;
`;

export const ArrowBottom = styled.i.attrs({
    className: "fa fa-angle-down",
})`
    font-size: 24px;
`;
