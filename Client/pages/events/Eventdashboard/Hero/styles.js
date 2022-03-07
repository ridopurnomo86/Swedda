import styled from "styled-components";
import { MainContainer } from "../../../../styles";

export const HeroBanner = styled.div`
    background: linear-gradient(to right, rgba(0, 131, 176) 100%, rgba(0, 180, 219) 0%) no-repeat center center;
    background-size: cover;
    color: ${({ theme }) => theme.shader.primary};
    padding: 64px 0px;
`;

export const ContentImage = styled.div``;

export const ContentText = styled(MainContainer)``;

export const Title = styled.p`
    font-size: 32px;
    font-weight: 700;
`;

export const Text = styled.p`
    font-size: 16px;
    font-weight: 400;
    margin-top: 16px;
    max-width: 500px;
`;
