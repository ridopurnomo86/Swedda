import styled from "styled-components";
import { devices } from "@styles/breakpoint";

export const HeroContainer = styled.div`
    position: relative;
    width: 100%;
    .rounded {
        border-radius: 8px;
    }
`;

export const Shapes = styled.div`
    position: relative;
    z-index: 0;
    width: 100%;
    height: 200px;
    margin: 0px auto;
    background-color: ${({ theme }) => theme.main.secondary};

    @media ${devices.tabletM} {
        height: 280px;
        width: 90%;
    }
`;

export const ImageContainer = styled.div`
    width: 90%;
    height: 300px;
    position: absolute;
    top: 80px;
    right: 0px;
    bottom: 0px;
    left: 0px;
    margin-left: auto;
    margin-right: auto;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 6px 12px -2px, rgba(0, 0, 0, 0.3) 0px 3px 7px -3px;

    @media ${devices.laptopM} {
        height: 600px;
    }

    @media ${devices.tabletM} {
        height: 400px;
        top: 120px;
        width: 80%;
    }
`;
