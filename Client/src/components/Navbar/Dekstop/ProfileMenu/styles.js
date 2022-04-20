import styled from "styled-components";
import Link from "next/link";

export const ProfileMenuContainer = styled.div`
    position: relative;
    cursor: pointer;
`;

export const MenuContainer = styled.div`
    position: absolute;
    top: 20px;
    right: 10px;
    padding: 16px;
    width: 150px;
    z-index: 100;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 4px;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 2px 5px -1px, rgba(0, 0, 0, 0.3) 0px 1px 3px -1px;
    background-color: ${({ theme }) => theme.shader.primary};
`;

export const LinkNavigation = styled(Link)``;

export const LinkText = styled.p`
    font-size: 16px;
    font-weight: 600;
    padding-bottom: 8px;
    margin-bottom: 8px;
    border-bottom: 1px solid ${({ theme }) => theme.shader.secondary};
    width: 100%;
    text-align: center;
`;
