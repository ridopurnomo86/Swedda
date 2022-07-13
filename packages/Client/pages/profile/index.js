import React, { useEffect, useState } from "react";
import { useToasts } from "react-toast-notifications";
import dynamic from "next/dynamic";
import Head from "next/head";
import dayjs from "dayjs";
import nookies from "nookies";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Get from "../api/useGET";
import Put from "../api/usePUT";
import schemaValidation from "@modules/validation/profile";
import { ProfileContainer } from "./styles";

const CardProfile = dynamic(() => import("./CardProfile"), {
    ssr: true,
});

export async function getServerSideProps(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];

    if (!token) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            },
        };
    }

    return {
        props: {
            token: token ? token : null,
        },
    };
}

const ProfilePage = () => {
    const { addToast } = useToasts();
    const [initialValues, setInitialValues] = useState(null);
    const [isPUTTING, setIsPUTTING] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm({
        resolver: yupResolver(schemaValidation),
        defaultValues: initialValues,
    });

    useEffect(() => {
        const fetchData = () => {
            Get({
                path: "/user/info",
                callback: (res) => {
                    setInitialValues(res.info);
                    reset({
                        name: res.info.name,
                        email: res.info.email,
                        gender: res.info.gender,
                        birth_date: dayjs(res.info.birth_date).format("YYYY-MM-DD"),
                    });
                },
            });
        };
        fetchData();

        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const onSubmit = (values) => {
        if (!isPUTTING) {
            Put({
                path: "/user/info",
                body: { ...values, birth_date: dayjs(values.birth_date).format() },
                config: undefined,
                setIsPUTTING,
                callback: (res) => {
                    if (res)
                        return addToast(res.message, { appearance: "success", autoDismiss: true });
                },
                errorCallback: (err) => {
                    if (err)
                        return addToast("Something Gone Wrong...", {
                            appearance: "error",
                            autoDismiss: true,
                        });
                },
            });
        }
    };

    return (
        <ProfileContainer>
            <Head>
                <title>Profile</title>
                <meta charSet="UTF-8" />
                <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <CardProfile
                errors={errors}
                handleSubmit={handleSubmit}
                register={register}
                onSubmit={onSubmit}
                isPUTTING={isPUTTING}
                defaultValue={initialValues}
            />
        </ProfileContainer>
    );
};

export default ProfilePage;
