import styled from "styled-components";
import { MainContainer } from "../../../../../styles";

export const HumbergerMenu = styled(MainContainer)`
    position: fixed;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    max-width: 100%;
    height: 100%;
    background-color: ${({ theme }) => theme.main.primary};
    opacity: 1;
    top: 0px;
    overflow-x: hidden;
    transition: left 500ms ease;
    left: ${({ transition }) => (transition ? "0px" : "-1000px")};

    .mt-m {
        margin-top: 16px;
    }
`;

export const SidebarContainer = styled.div`
    transform: translate(0px, 60px);
`;
