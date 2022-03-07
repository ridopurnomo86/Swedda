import React from "react";
import PropTypes from "prop-types";
import { 
    ScheduleList, 
    ScheduleWrapper, 
    ScheduleIcon, 
    UserIcon, 
    LocationIcon, 
    Text 
} from "./styles";

const Schedule = ({ time, users, location }) => (
    <ScheduleWrapper>
        <ScheduleList>
            <ScheduleIcon />
            <Text>{time ? time : "-"}</Text>
        </ScheduleList>
        <ScheduleList>
            <UserIcon />
            <Text>{users ? users : "-"}</Text>
        </ScheduleList>
        <ScheduleList>
            <LocationIcon />
            <Text>{location ? location : "-"}</Text>
        </ScheduleList>
    </ScheduleWrapper>
);

export default Schedule;

Schedule.propTypes = {
    time: PropTypes.string,
    users: PropTypes.number,
    location: PropTypes.string
};

Schedule.defaultProps = {
    time: "",
    users: undefined,
    location: ""
};