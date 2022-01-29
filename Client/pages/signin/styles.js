import styled from "styled-components";
import Button from "../../src/components/Button";

export const SignupContainer = styled.div`
    width: 40%;
    padding: 0px 12px;
    height: 80vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 0 auto;

    .mt-m {
        margin-top: 16px;
    }

    .underline {
        cursor: pointer;
        text-decoration: underline;
    }

    @media (max-width: 968px) {
        width: 70%;
    }

    @media (max-width: 600px) {
        width: 100%;
    }
`;

export const ButtonForm = styled(Button).attrs({
    width: "100%",
})``;

export const OptionalText = styled.p`
    width: 100%;
    margin-top: 16px;
    font-size: 14px;
    margin-bottom: 16px;
    padding-top: 8px;
    border-top: 1px solid rgba(0, 0, 0, 0.3);
`;

export const Wrapper = styled.div`
    width: 100%;
`;

export const Title = styled.p`
    font-size: 24px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 16px;
`;
