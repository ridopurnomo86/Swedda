import React from "react";
import Hero from "./Hero";
import EventsContainer from "./styles";
import ListEvent from "./ListEvent";

const EventsDashboard = () => (
    <>
        <EventsContainer>
            <Hero />
            <ListEvent />
        </EventsContainer>
    </>
);

export default EventsDashboard;
