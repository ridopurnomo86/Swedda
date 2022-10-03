import React, { useState } from "react";
import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { useToasts } from "react-toast-notifications";
import Head from "next/head";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import CircularLoading from "components/CircularLoading";
import Form from "components/Form";
import schemaValidation from "modules/validation/signin";
import Session from "../../lib/Auth";
import { SignupContainer, ButtonForm, OptionalText, Wrapper, Title } from "./styles";
import Post from "hooks/api/usePOST";

const SigninPage = () => {
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
            Post({
                path: "/auth/signin",
                body: values,
                undefined,
                setIsPOSTING,
                callback: (res) => {
                    setTimeout(() => {
                        Session.setUserFromCookie();
                        router.push("/dashboard");
                    }, 2000);
                    if (res) {
                        Session.setCookieFromResponse(res?.token);
                        addToast(res?.message, { appearance: "success", autoDismiss: true });
                    }
                },
                errorCallback: (err) => {
                    if (err)
                        return addToast("Cannot Login", { appearance: "error", autoDismiss: true });
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
                        <Link href="/signup" passHref>
                            <span className="underline">Sign Up</span>
                        </Link>
                    </OptionalText>
                </Form>
            </Wrapper>
        </SignupContainer>
    );
};

export default SigninPage;
