import React from "react";
import Image from "next/image";
import { HeroContainer, ImageContainer, Shapes } from "./styles";

const Hero = () => (
    <HeroContainer>
        <Shapes />
        <ImageContainer>
            <Image
                src={"https://source.unsplash.com/-tikpxRBcsA"}
                quality="100"
                layout="fill"
                alt="pic"
                className="rounded"
                objectFit="cover"
                priority
            />
        </ImageContainer>
    </HeroContainer>
);

export default Hero;
