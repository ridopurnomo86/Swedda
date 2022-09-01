import Button from "src/components/Button";
import styled from "styled-components";
import { MainContainer } from "styles/index";

export const ProfileContainer = styled(MainContainer)`
    min-height: 100vh;
    margin-bottom: 64px;
`;

export const NotificationIcon = styled.i.attrs({
    className: "fa-sharp fa-solid fa-triangle-exclamation",
})`
    font-size: 64px;
    padding: 0px 2px;
    color: ${({ theme }) => theme.main.error};
`;

export const RemoveButton = styled(Button).attrs(({ theme }) => ({
    backgroundColor: theme.main.error,
    color: theme.shader.primary,
    width: "100%",
}))``;
