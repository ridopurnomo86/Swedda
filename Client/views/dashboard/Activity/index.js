import React from "react";
import CardActivity from "./CardActivity";
import EmptyState from "./EmptyState";
import Header from "./Header";
import { ActivityContainer, ContentActivity } from "./styles";

const DATA = [];

const renderItem = (data) => {
    if (data?.length > 0)
        return data?.map((info) => (
            <CardActivity key={info.id} title={info.title} status={info.status} />
        ));
    return <EmptyState />;
};

const Activity = () => {
    return (
        <ActivityContainer>
            <Header />
            <ContentActivity>{renderItem(DATA)}</ContentActivity>
        </ActivityContainer>
    );
};

export default Activity;
