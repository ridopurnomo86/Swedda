import React from "react";
import PropTypes from "prop-types";
import { ActionContainer, AddButton, CreateIcon } from "./styles";

const Action = ({ isLoading }) => (
    <ActionContainer>
        <AddButton disabled={isLoading}>
            <CreateIcon />
            Add Photo
        </AddButton>
    </ActionContainer>
);

export default Action;

Action.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
