import React, { useState } from "react";
import Form from "../../src/components/Form";
import OptionalContent from "./OptionalContent";
import { SignupContainer, ButtonForm, Title } from "./styles";
import { useForm } from "react-hook-form";
import usePOST from "../api/usePOST";
import CircularLoading from "../../src/components/CircularLoading";
import nookies from "nookies";
import Notification from "../../src/components/Notification";

const Signup = () => {
    const [isPOSTING, setIsPOSTING] = useState(false);
    const [error, setError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (values) => {
        if (!isPOSTING) {
            const config = {
                Headers: "Content-Type: application/json",
            };
            usePOST({
                path: "auth/signup",
                body: values,
                config,
                setIsPOSTING,
                errorCallback: () => {
                    setError(true);
                },
            });
        }
    };

    return (
        <SignupContainer>
            <Notification
                state={error}
                message="Sorry, Something Wrong"
                onClose={() => setError(false)}
            />
            <Title>Get Started for free</Title>
            <Form
                FormList={[
                    {
                        id: "username",
                        label: "Username",
                        name: "username",
                        placeholder: "Username...",
                        type: "text",
                        validation: {
                            required: true,
                            maxLength: 20,
                            pattern: "/[a-zA-Z0-9]+/g",
                        },
                    },
                    {
                        id: "email",
                        label: "Email",
                        name: "email",
                        placeholder: "Email...",
                        type: "email",
                        validation: { required: true },
                    },
                    {
                        id: "Password",
                        label: "Password",
                        name: "password",
                        placeholder: "Password...",
                        type: "password",
                        validation: { required: true },
                    },
                ]}
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmit={onSubmit}
            >
                <ButtonForm classNames="mt-m" padding="16px" type="submit" disable={isPOSTING}>
                    {isPOSTING ? <CircularLoading /> : "Sign Up"}
                </ButtonForm>
                <OptionalContent />
            </Form>
        </SignupContainer>
    );
};

export async function getServerSideProps(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];
    if (token) {
        return {
            redirect: {
                destination: "/",
                permanent: true,
            },
        };
    }

    return {
        props: {},
    };
}

export default Signup;
