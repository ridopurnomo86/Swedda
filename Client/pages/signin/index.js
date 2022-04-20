import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Head from "next/head";
import usePOST from "../api/usePOST";
import Notification from "../../src/components/Notification";
import Form from "../../src/components/Form";
import Link from "next/link";
import { SignupContainer, ButtonForm, OptionalText, Wrapper, Title } from "./styles";
import CircularLoading from "../../src/components/CircularLoading";

import nookies from "nookies";

import Session from "../../lib/Auth";

const Signin = () => {
    const [isPOSTING, setIsPOSTING] = useState(false);
    const [isError, setIsError] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const router = useRouter();

    const onSubmit = (values) => {
        if (!isPOSTING) {
            const config = {
                Headers: "Content-Type: application/json",
            };
            usePOST({
                path: "/auth/signin",
                body: values,
                config,
                setIsPOSTING,
                callback: () => {
                    Session.setUserFromCookie();
                    router.push("/");
                },
                errorCallback: () => {
                    setIsError(true);
                },
            });
        }
    };

    return (
        <SignupContainer>
            <Head>
                <title>Sign In</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <Notification state={isError} onClose={setIsError} message="Something Gone Wrong..." />
            <Wrapper>
                <Title>Sign in to Swedda</Title>
                <Form
                    FormList={[
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
                    handleSubmit={handleSubmit}
                    errors={errors}
                    onSubmit={onSubmit}
                >
                    <ButtonForm classNames="mt-m" padding="16px" type="submit" disable={isPOSTING}>
                        {isPOSTING ? <CircularLoading /> : "Sign In"}
                    </ButtonForm>
                    <OptionalText>
                        Not a member yet?&nbsp;
                        <Link href="/signup">
                            <span className="underline">Sign Up</span>
                        </Link>
                    </OptionalText>
                </Form>
            </Wrapper>
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

export default Signin;
