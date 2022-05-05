import React from "react";
import { Title, HeroBanner, Text, ContentText } from "./styles";

const Hero = () => (
    <HeroBanner>
        <ContentText>
            <Title>Swedda Events.</Title>
            <Text>
                Our team regularly host special events, livestreams, and tutorials. Not finding event you&apos;re
                looking for? Check out our Chapters for peer-led Meetups histed by learners like you.
            </Text>
        </ContentText>
    </HeroBanner>
);

export default Hero;
