import React from "react";
import PropTypes from "prop-types";
import CardEvent from "./CardEvent";
import { CardList, ListEventWrapper, Text, Title } from "./styles";

const ListEvent = ({ events = [] }) => (
    <ListEventWrapper>
        <Title>Next Event.</Title>
        <Text>Improve your skills by learning at events organized by our partners.</Text>
        <CardList>
            {events.map((info) => (
                <CardEvent
                    key={info.event_id}
                    imgSrc={info.image_source}
                    title={info.title}
                    desc={info.description}
                    sourcePerson={info.director}
                    time={info.time_start}
                    users={info.total_participant}
                    location={info.type_event}
                />
            ))}
        </CardList>
    </ListEventWrapper>
);

export default React.memo(ListEvent, () => true);

ListEvent.propTypes = {
    events: PropTypes.arrayOf(PropTypes.object),
};

ListEvent.defaultProps = {
    events: undefined,
};
