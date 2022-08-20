import React from "react";
import CardActivity from "./CardActivity";
import EmptyState from "./EmptyState";
import Header from "./Header";
import { ActivityContainer, ContentActivity } from "./styles";

const DATA = [
    {
        id: "1",
        title: "Dasar-dasar Akutansi",
        status: "On Progress",
    },
    {
        id: "2",
        title: "Dasar-dasar Administrasi Bisnis",
        status: "On Progress",
    },
    {
        id: "3",
        title: "Dasar-dasar Sales",
        status: "On Progress",
    },
];

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
