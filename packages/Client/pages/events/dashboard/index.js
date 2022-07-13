import React from "react";
import PropTypes from "prop-types";
import HeadTemplate from "@src/components/Head";
import dynamic from "next/dynamic";
import EventsContainer from "./styles";
import { getEvents, getUserToken } from "../../../lib/events";

const Hero = dynamic(() => import("./Hero"));
const ListEvent = dynamic(() => import("./ListEvent"));

export async function getServerSideProps(context) {
    const token = await getUserToken(context);
    const events = await getEvents();

    if (!token) {
        return {
            redirect: {
                destination: "/events",
                permanent: false,
            },
        };
    }

    return {
        props: {
            token: token ? token : null,
            events: events ? events : null,
        },
    };
}

const EventsDashboard = ({ events }) => (
    <>
        <HeadTemplate title="Events" />
        <EventsContainer>
            <Hero />
            <ListEvent events={events} />
        </EventsContainer>
    </>
);

export default EventsDashboard;

EventsDashboard.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
};

EventsDashboard.defaultProps = {
    events: undefined,
};
