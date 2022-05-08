import React from "react";
import PropTypes from "prop-types";
import Head from "next/head";
import dynamic from "next/dynamic";
import nookies from "nookies";

const EventDashboard = dynamic(() => import("./Eventdashboard"), {
    ssr: true,
});
const EventStatic = dynamic(() => import("./Static"), {
    ssr: true,
});


export async function getServerSideProps(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];
    const res = await fetch(`${process.env.BACKEND_URL}/events/`);
    const { data: events } = await res.json();

    return {
        props: {
            token: token ? token : null,
            events: events ? events : null,
        },
    };
}


const Event = ({ token, events }) =>
    token ? (
        <>
            <Head>
                <title>Events</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <EventDashboard listEvent={events} />
        </>
    ) : (
        <>
            <Head>
                <title>Events</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <EventStatic />
        </>
    );

export default Event;

Event.propTypes = {
    token: PropTypes.string,
    events: PropTypes.arrayOf(PropTypes.object),
};

Event.defaultProps = {
    token: null,
    events: null,
};
