import styled from "styled-components";
import button from "components/Button";

export const StudyToolsContainer = styled.div`
    width: 100%;
`;

export const Title = styled.p`
    font-size: 18px;
    font-weight: 600;
`;

export const SubTitle = styled.p`
    font-size: 14px;
    font-weight: 500;
    margin: 8px 0px;
`;

export const Text = styled.p`
    font-size: 14px;
`;

export const Button = styled(button).attrs({
    width: "100%",
})``;
