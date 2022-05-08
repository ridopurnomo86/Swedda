import React from "react";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import EventsContainer from "./styles";

const Hero = dynamic(() => import("./Hero"));
const ListEvent = dynamic(() => import("./ListEvent"));

const EventsDashboard = ({ listEvent }) => (
    <>
        <EventsContainer>
            <Hero />
            <ListEvent events={listEvent} />
        </EventsContainer>
    </>
);

export default EventsDashboard;

EventsDashboard.propTypes = {
    listEvent: PropTypes.arrayOf(PropTypes.object),
};

EventsDashboard.defaultProps = {
    listEvent: undefined,
};
