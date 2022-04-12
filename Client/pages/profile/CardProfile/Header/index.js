import React from "react";
import Image from "next/image";
import { HeaderContainer, TitleText, SubtitleText, ProfileImage, PrimaryInfoContainer, Wrapper } from "./styles";

const Header = () => (
    <HeaderContainer>
        <Image
            src={"https://source.unsplash.com/-G3rw6Y02D0"}
            alt="https://source.unsplash.com/-G3rw6Y02D0"
            layout="responsive"
            quality={100}
            width={100}
            height={30}
            objectFit="cover"
            priority
        />
        <PrimaryInfoContainer>
            <ProfileImage
                src={"https://source.unsplash.com/QS9ZX5UnS14"}
                alt="https://source.unsplash.com/QS9ZX5UnS14"
                layout="fixed"
                width={150}
                height={150}
                quality={100}
                objectFit="cover"
            />
            <Wrapper>
                <TitleText>Anita Cruz</TitleText>
                <SubtitleText>@anita999</SubtitleText>
            </Wrapper>
        </PrimaryInfoContainer>
    </HeaderContainer>
);

export default Header;
