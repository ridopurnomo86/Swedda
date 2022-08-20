import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import EventsContainer from "./styles";

const Hero = dynamic(() => import("./Hero"));
const ListEvent = dynamic(() => import("./ListEvent"));

const EventsDashboard = ({ events }) => (
    <EventsContainer>
        <Hero />
        <ListEvent events={events} />
    </EventsContainer>
);

export default EventsDashboard;

EventsDashboard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
};

EventsDashboard.defaultProps = {
    events: undefined,
};
