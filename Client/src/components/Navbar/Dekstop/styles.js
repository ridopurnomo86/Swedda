import styled from "styled-components";
import { MainContainer } from "../../../../styles";

export const NavbarContainer = styled.div`
    width: 100%;
    box-shadow: ${({ isScroll }) => (isScroll ? "none" : "rgba(0, 0, 0, 0.1) 0px 4px 12px")};
    background-color: ${({ theme, isScroll }) => (isScroll ? theme.bg.primary : theme.shader.primary)};
    padding: 16px 0px;
    position: fixed;
    z-index: 10;
    top: 0;
    transition: 0.5s;
    .pointer {
        cursor: pointer;
    }
    .semibold {
        font-weight: 600;
    }
`;

export const ChildContainer = styled(MainContainer)`
    display: flex;
    align-items: center;
    justify-content: space-between;
`;

export const LogoContainer = styled.div``;

export const MenuContainer = styled.div`
    display: flex;
    align-items: center;
    gap: 24px;
    .ml-m {
        margin-left: 24px;
    }
`;
