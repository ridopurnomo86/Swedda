import React from "react";
import dynamic from "next/dynamic";
import HeadTemplate from "@components/Head";
import { getUserToken } from "../../lib/events";

const EventStatic = dynamic(() => import("./Static"));

export async function getServerSideProps(context) {
    const token = await getUserToken(context);

    if (token) {
        return {
            redirect: {
                destination: "/events/dashboard",
                permanent: false,
            },
        };
    }

    return {
        props: {},
    };
}

const EventsPage = () => (
    <>
        <HeadTemplate title="Event" />
        <EventStatic />
    </>
);

export default EventsPage;
