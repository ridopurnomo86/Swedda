import React from "react";
import PropTypes from "prop-types";
import HeadTemplate from "src/components/Head";
import { getEvents } from "../../../lib/events";
import EventsDashboardViews from "views/events/dashboard";

export async function getStaticProps() {
    const events = await getEvents();

    return {
        props: {
            events: events ? events : null,
        },
    };
}

const EventsDashboard = ({ events }) => (
    <>
        <HeadTemplate title="Events" />
        <EventsDashboardViews events={events} />
    </>
);

export default EventsDashboard;

EventsDashboard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
};

EventsDashboard.defaultProps = {
    events: undefined,
};
