import styled from "styled-components";
import { MainContainer } from "../../../../styles";

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
    grid-template-columns: repeat(4, auto);
    align-items: center;
    justify-content: space-around;
`;

export const CardExclusiveClass = styled.div`
    max-width: 350px;
    border-radius: 8px;
    border: 1px solid #d9d9db;
    overflow: hidden;
`;

export const CardContent = styled.div`
    padding: 24px 20px;
`;

export const CardTitle = styled.p`
    font-size: 18px;
    margin-bottom: 12px;
    font-weight: 700;
`;

export const CardText = styled.p`
    font-size: 14px;
    font-weight: 400;
    text-align: justify;
`;
