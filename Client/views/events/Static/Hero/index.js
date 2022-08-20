import React from "react";
import Image from "next/image";
import { HeroContainer, ImageContainer, Shapes } from "./styles";

const IMG_URL = "https://source.unsplash.com/-tikpxRBcsA";

const Hero = () => (
    <HeroContainer>
        <Shapes />
        <ImageContainer>
            <Image
                src={IMG_URL}
                loader={() => IMG_URL}
                quality="100"
                layout="fill"
                alt="pic"
                className="rounded"
                objectFit="cover"
                priority
                unoptimized
            />
        </ImageContainer>
    </HeroContainer>
);

export default Hero;
