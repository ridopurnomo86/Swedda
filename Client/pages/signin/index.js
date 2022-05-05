import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import nookies from "nookies";
import Head from "next/head";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import usePOST from "../api/usePOST";
import Form from "../../src/components/Form";
import { SignupContainer, ButtonForm, OptionalText, Wrapper, Title } from "./styles";
import CircularLoading from "../../src/components/CircularLoading";
import Session from "../../lib/Auth";
import schemaValidation from "../../src/modules/validation/signin";

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

const Signin = () => {
    const router = useRouter();
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
                path: "/auth/signin",
                body: values,
                undefined,
                setIsPOSTING,
                callback: (res) => {
                    setTimeout(() => {
                        Session.setUserFromCookie();
                        router.push("/");
                    }, 2000);
                    if (res) return addToast(res?.data?.message, { appearance: "success", autoDismiss: true });
                },
                errorCallback: (err) => {
                    if (err) return addToast("Cannot Login", { appearance: "error", autoDismiss: true });
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

export default Signin;
