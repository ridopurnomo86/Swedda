import React from "react";
import PropTypes from "prop-types";
import { MessageContainer, NotificationContainer, CloseAction, TextMessage } from "./styles";

const Notification = ({ state, onClose, message }) => {
    setTimeout(() => {
        onClose(false);
    }, 5000);

    return (
        <NotificationContainer show={state}>
            <MessageContainer>
                <i className="fas fa-bell mr-m"></i>
                <TextMessage>{message}</TextMessage>
            </MessageContainer>
            <CloseAction onClick={() => onClose(false)}>
                <i className="fas fa-times"></i>
            </CloseAction>
        </NotificationContainer>
    );
};

export default Notification;

Notification.propTypes = {
    message: PropTypes.string,
    state: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

Notification.defaultProps = {
    message: "",
};
