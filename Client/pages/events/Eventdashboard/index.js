import React from "react";
import dynamic from "next/dynamic";
import EventsContainer from "./styles";

const Hero = dynamic(() => import("./Hero"));
const ListEvent = dynamic(() => import("./ListEvent"));

const EventsDashboard = () => (
    <>
        <EventsContainer>
            <Hero />
            <ListEvent />
        </EventsContainer>
    </>
);

export default EventsDashboard;
