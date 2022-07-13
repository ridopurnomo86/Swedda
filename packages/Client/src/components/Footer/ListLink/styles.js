import styled from "styled-components";
import { devices } from "../../../../styles/breakpoint";

export const QuickLink = styled.div`
    margin: 0;

    @media ${devices.mobileL} {
        margin: 0px 16px;
    }
`;

export const SupportList = styled.div`
    margin: 0;

    @media ${devices.mobileL} {
        margin: 0px 16px;
    }
`;

export const LinkTitle = styled.p`
    font-size: 20px;
    font-weight: 600;
    margin-bottom: 36px;
`;
