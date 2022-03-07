import React from "react";
import { ChildTitle, HeroContainer, HeroTitle, SubTitle, Wrapper } from "./styles";

const Hero = () => (
    <Wrapper>
        <HeroContainer>
            <ChildTitle>Learning</ChildTitle>
            <HeroTitle>Easy and Reliable to Learn</HeroTitle>
            <SubTitle>
                We provide various kinds of business courses for you, Bussiness Development, Sales Trainee, Management
                Trainee, and Many more.
            </SubTitle>
        </HeroContainer>
    </Wrapper>
);

export default Hero;
