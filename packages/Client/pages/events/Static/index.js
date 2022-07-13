import React from "react";
import EventStaticContainer from "./styles";
import dynamic from "next/dynamic";

const Title = dynamic(() => import("./Title"));
const Hero = dynamic(() => import("./Hero"));
const InfoEvent = dynamic(() => import("./InfoEvent"));

const Static = () => (
    <EventStaticContainer>
        <Title />
        <Hero />
        <InfoEvent />
    </EventStaticContainer>
);

export default Static;
