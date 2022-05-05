import React from "react";
import { EmptyStateContainer, NotificationIcon, TitleText } from "./styles";

const EmptyState = () => (
    <EmptyStateContainer>
        <NotificationIcon />
        <TitleText>No have activity yet...</TitleText>
    </EmptyStateContainer>
);

export default EmptyState;
