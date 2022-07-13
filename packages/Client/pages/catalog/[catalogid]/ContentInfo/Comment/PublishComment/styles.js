import styled from "styled-components";
import Button from "@components/Button";

export const PublishCommentContainer = styled.div`
    position: relative;
    margin-bottom: 32px;
    overflow: hidden;
    max-width: 400px;

    .button-style {
        border-radius: 8px;
        position: absolute;
        bottom: 10px;
        right: 10px;
    }

    .mt-m {
        margin-top: 16px;
    }
`;

export const ButtonSubmit = styled(Button)`
    display: block;
    width: 100%;
`;
