import React from "react";
import ListInfo from "./ListInfo";
import { InfoEventContainer, TitleEvent, TitleText, FlexInfo } from "./styles";

const InfoEvent = () => (
    <InfoEventContainer>
        <TitleEvent>Why Event So Important To You?</TitleEvent>
        <TitleText>
            The following are the benefits that you will get if you actively join the Swedda event.
        </TitleText>
        <FlexInfo>
            <ListInfo
                icon={<i className="fa fa-graduation-cap" style={{ fontSize: "64px" }}></i>}
                title="Technical Ability Upgrade"
                infoText="There are many speakers who have been in the IT world for a 
                long time from various fields, 
                so you can choose the event that suits you best
                according to your abilities/interests."
            />
            <ListInfo
                icon={<i className="fa fa-network-wired" style={{ fontSize: "64px" }}></i>}
                title="Build Network"
                infoText="The event was attended by top speakers and participants from various regions,
                so you have the opportunity to build relationships with great speakers, attendees and people there."
            />
            <ListInfo
                icon={<i className="fa fa-highlighter" style={{ fontSize: "60px" }}></i>}
                title="Up-to-Date Development"
                infoText="
                The material presented is in accordance with current IT developments, 
                so you don't miss the latest technological developments."
            />
        </FlexInfo>
    </InfoEventContainer>
);

export default InfoEvent;
