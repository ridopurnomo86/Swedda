import React from "react";
import HeadTemplate from "src/components/Head";
import EventsViews from "views/events";

const EventsPage = () => (
    <>
        <HeadTemplate title="Events" />
        <EventsViews />
    </>
);
export default EventsPage;
