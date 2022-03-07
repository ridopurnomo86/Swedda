import styled from "styled-components";

export const Text = styled.p`
    font-size: 14px;
    font-weight: 400px;
    text-align: justify;
    max-width: 900px;
`;

export const ScheduleWrapper = styled.div`
    margin-top: 16px;
`;

export const ScheduleList = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 4px;
`;

export const ScheduleIcon = styled.i.attrs({
    className: "fas fa-calendar",
})`
    font-size: 16px;
    padding: 0px 2px;
    margin-right: 13px;
`;

export const UserIcon = styled.i.attrs({
    className: "fas fa-users",
})`
    font-size: 16px;
    padding: 0px 2px;
    margin-right: 8px;
`;

export const LocationIcon = styled.i.attrs({
    className: "fas fa-location-arrow",
})`
    font-size: 16px;
    padding: 0px 2px;
    margin-right: 12px;
`;

