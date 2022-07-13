import styled from "styled-components";
import { devices } from "styles/breakpoint";

export const LeftMenuContainer = styled.div`
    display: none;

    @media ${devices.tabletM} {
        display: block;
    }
`;
