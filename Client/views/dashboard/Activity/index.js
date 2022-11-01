import React from "react";
import EmptyState from "./EmptyState";
import Header from "./Header";
import { ActivityContainer, ContentActivity } from "./styles";

const Activity = () => {
    return (
        <ActivityContainer>
            <Header />
            <ContentActivity>
                <EmptyState />
            </ContentActivity>
        </ActivityContainer>
    );
};

export default Activity;
