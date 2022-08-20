import styled from "styled-components";
import image from "next/image";
import { devices } from "styles/breakpoint";

export const HeaderContainer = styled.div`
    width: 100%;
    overflow: hidden;
    position: relative;
`;

export const TitleText = styled.p`
    font-size: 20px;
    font-weight: 600;
`;

export const SubtitleText = styled.p`
    font-size: 14px;
    font-weight: 400;
    margin-bottom: 8px;
    color: ${({ theme }) => theme.shader.secondaryOptional};
`;

export const ProfileImage = styled(image).attrs({
    layout: "fixed",
    width: 100,
    height: 100,
    quality: 100,
    objectFit: "cover",
})`
    border-radius: 50%;
    aspect-ratio: 1 / 1;
`;

export const HeaderImage = styled(image).attrs({
    src: "https://source.unsplash.com/-G3rw6Y02D0",
    alt: "https://source.unsplash.com/-G3rw6Y02D0",
    layout: "responsive",
    quality: 100,
    width: 100,
    height: 30,
    objectFit: "cover",
    priority: true,
})``;

export const PrimaryInfoContainer = styled.div`
    padding: 16px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    @media ${devices.mobileL} {
        flex-direction: row;
        justify-content: initial;
        align-items: initial;
    }
`;

export const Wrapper = styled.div`
    margin: 32px 0px 0px 0px;
    text-align: center;

    @media ${devices.mobileL} {
        margin: 0px 0px 0px 32px;
        text-align: left;
    }
`;
