import React, { useState } from "react";
import { useForm } from "react-hook-form";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useToasts } from "react-toast-notifications";
import Form from "components/Form";
import CircularLoading from "components/CircularLoading";
import schemaValidation from "modules/validation/signup";
import OptionalContent from "./OptionalContent";
import { SignupContainer, ButtonForm, Title } from "./styles";
import Post from "hooks/api/usePOST";

const SignupPage = () => {
    const { addToast } = useToasts();
    const [isPOSTING, setIsPOSTING] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(schemaValidation),
    });

    const handleSubmitForm = (values) => {
        if (!isPOSTING) {
            Post({
                path: "auth/signup",
                body: values,
                undefined,
                setIsPOSTING,
                callback: (res) => {
                    if (res)
                        return addToast(res?.message, { appearance: "success", autoDismiss: true });
                },
                errorCallback: (err) => {
                    if (err?.message)
                        return addToast("Something gone wrong", {
                            appearance: "error",
                            autoDismiss: true,
                        });
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
                        disabled: isPOSTING,
                    },
                    {
                        id: "name",
                        label: "Name",
                        name: "name",
                        placeholder: "Name...",
                        type: "text",
                        validation: {
                            required: true,
                        },
                        disabled: isPOSTING,
                    },
                    {
                        id: "email",
                        label: "Email",
                        name: "email",
                        placeholder: "Email...",
                        type: "email",
                        validation: { required: true },
                        disabled: isPOSTING,
                    },
                    {
                        id: "Password",
                        label: "Password",
                        name: "password",
                        placeholder: "Password...",
                        type: "password",
                        validation: { required: true },
                        disabled: isPOSTING,
                    },
                ]}
                register={register}
                errors={errors}
                handleSubmit={handleSubmit}
                onSubmit={handleSubmitForm}
            >
                <ButtonForm classNames="mt-m" padding="16px" type="submit" disable={isPOSTING}>
                    {isPOSTING ? <CircularLoading /> : "Sign Up"}
                </ButtonForm>
                <OptionalContent />
            </Form>
        </SignupContainer>
    );
};

export default SignupPage;
