import React from "react";
import { ActionContainer, AddButton, CreateIcon, RemoveButton, TrashIcon } from "./styles";

const Action = () => (
    <ActionContainer>
        <AddButton>
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
