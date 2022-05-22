import styled from "styled-components";
import Button from "@components/Button";

export const ActionContainer = styled.div`
    margin-top: 16px;
    display: flex;
    gap: 16px;
`;

export const TrashIcon = styled.i.attrs({
    className: "fa-solid fa-trash",
})`
    margin-right: 8px;
`;

export const CreateIcon = styled.i.attrs({
    className: "fa-solid fa-pen-to-square",
})`
    margin-right: 8px;
`;

export const AddButton = styled(Button).attrs(({ theme }) => ({
    backgroundColor: theme.shader.primary,
    color: "#000000",
    type: "submit",
}))`
    display: block;
    width: 100%;
`;

export const RemoveButton = styled(Button).attrs(({ theme }) => ({
    backgroundColor: theme.main.error,
    color: theme.shader.primary,
}))`
    display: block;
    width: 100%;
`;
