import React from "react";
import PropTypes from "prop-types";
import { ActionContainer, AddButton, CreateIcon, RemoveButton, TrashIcon } from "./styles";

const Action = ({ isLoading }) => (
    <ActionContainer>
        <AddButton disabled={isLoading}>
            <CreateIcon />
            Add Photo
        </AddButton>
        <RemoveButton disabled>
            <TrashIcon />
            Remove Photo
        </RemoveButton>
    </ActionContainer>
);

export default Action;

Action.propTypes = {
    isLoading: PropTypes.bool.isRequired,
};
