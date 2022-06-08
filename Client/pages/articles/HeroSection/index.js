import React from "react";
import { HeroContainer, SubtitleHero, TitleHero } from "./styles";

const HeroSection = () => (
    <HeroContainer>
        <TitleHero>Swedda</TitleHero>
        <TitleHero>Articles</TitleHero>
        <SubtitleHero>
            Articles are more in-depth explanations about concepts covered in Swedda courses. Here
            you will learn more about workflows that developers use every day, and take your skills
            to the next level.
        </SubtitleHero>
    </HeroContainer>
);

export default HeroSection;
