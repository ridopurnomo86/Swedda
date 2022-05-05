import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import nookies from "nookies";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToasts } from "react-toast-notifications";
import Form from "../../src/components/Form";
import OptionalContent from "./OptionalContent";
import { SignupContainer, ButtonForm, Title } from "./styles";
import usePOST from "../api/usePOST";
import CircularLoading from "../../src/components/CircularLoading";
import schemaValidation from "../../src/modules/validation/signup";

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

const Signup = () => {
    const { addToast } = useToasts();
    const [isPOSTING, setIsPOSTING] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    const onSubmit = (values) => {
        if (!isPOSTING) {
            usePOST({
                path: "auth/signup",
                body: values,
                undefined,
                setIsPOSTING,
                errorCallback: (err) => {
                    if (err) return addToast("Something Gone Wrong...", { appearance: "error", autoDismiss: true });
                },
            });
        }
    };

    return (
        <SignupContainer>
            <Head>
                <title>Sign Up</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
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

export default Signup;
