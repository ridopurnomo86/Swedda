import styled, { keyframes } from "styled-components";
import Link from "next/link";

const animate = keyframes`
    from {
        transform: translateY(-10px);
        opacity: 0;
    }
    to {
        opacity: 1;
        transform: none;
    }
`;

export const ProfileMenuContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

export const Overlay = styled.div`
    display: ${({ isOpen }) => (isOpen ? "block" : "none")};
    position: fixed;
    z-index: 1;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
    background-color: rgb(0, 0, 0);
    background-color: rgba(0, 0, 0, 0.4);
`;

export const MenuContainer = styled.div`
    position: absolute;
    top: 30px;
    right: 30px;
    padding: 16px;
    width: 200px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: ${({ theme }) => theme.shader.primary};
    animation: ${animate} 0.3s forwards;
`;

export const LinkNavigation = styled(Link)``;

export const FlexContainer = styled.div`
    display: flex;
    border-bottom: 1px solid ${({ theme }) => theme.shader.secondary};
    padding-bottom: 12px;
    margin-bottom: 12px;
    width: 100%;
`;

export const LinkText = styled.p`
    font-size: 16px;
    font-weight: 600;
    margin-left: 16px;
`;

export const EllipsisIcon = styled.i.attrs({
    className: "fa-solid fa-ellipsis-vertical fa-xl",
})`
    padding: 16px;
    border-radius: 4px;
    outline: none;
    overflow: hidden;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const UserIcon = styled.i.attrs({
    className: "fa fa-user",
})``;

export const DashboardIcon = styled.i.attrs({
    className: "fa-solid fa-landmark",
})``;

export const RightBracketIcon = styled.i.attrs({
    className: "fa-solid fa-right-from-bracket",
})``;
