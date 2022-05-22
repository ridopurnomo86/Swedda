import React from "react";
import { EmptyStateContainer, NotificationIcon, TitleText } from "./styles";

const EmptyState = () => (
    <EmptyStateContainer>
        <NotificationIcon />
        <TitleText>You Haven&apos;t studied class</TitleText>
    </EmptyStateContainer>
);

export default EmptyState;
