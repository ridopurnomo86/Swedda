import styled from "styled-components";
import { MainContainer } from "../../../../styles";
import { devices } from "../../../../styles/breakpoint";

export const ExclusiveLessonContainer = styled(MainContainer)`
    margin-top: 128px;
`;

export const ExclusiveTitle = styled.p`
    font-size: 24px;
    font-weight: 700;
    margin-bottom: 8px;
`;

export const ExclusiveText = styled.p`
    font-size: 18px;
    font-weight: 400;
    margin-bottom: 24px;
`;

export const ListExclusiveClass = styled.div`
    display: grid;
    grid-template-columns: auto;
    gap: 32px;
    align-items: center;
    justify-content: space-around;
    
    @media ${devices.tabletS} {
        grid-template-columns: repeat(2, auto);
    }

    @media ${devices.tabletL}{
        grid-template-columns: repeat(4, auto);
    }
`;
