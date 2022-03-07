import React from "react";
import Hero from "./Hero";
import EventStaticContainer from "./styles";
import Title from "./Title";
import InfoEvent from "./InfoEvent";

const Static = () => (
    <EventStaticContainer>
        <Title />
        <Hero />
        <InfoEvent />
    </EventStaticContainer>
);

export default Static;
