import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import dayjs from "dayjs";
import { useToasts } from "react-toast-notifications";
import nookies from "nookies";
import Head from "next/head";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import useGET from "../api/useGET";
import schemaValidation from "../../src/modules/validation/profile";
import { ProfileContainer } from "./styles";
import usePUT from "../api/usePUT";

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

const Profile = () => {
    const { addToast } = useToasts();
    const [initialValues, setInitialValues] = useState({
        name: "",
        email: "",
        gender: "",
        birth_date: "",
    });
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
        useGET({
            path: "/user/info",
            callback: (res) => {
                setInitialValues({
                    ...res.info,
                    name: res.info.name,
                    email: res.info.email,
                    gender: res.info.gender,
                    birth_date: dayjs(res.info.birth_date).format("YYYY-MM-DD"),
                });
                reset({
                    name: res.info.name,
                    email: res.info.email,
                    gender: res.info.gender,
                    birth_date: dayjs(res.info.birth_date).format("YYYY-MM-DD"),
                });
            },
        });
    }, []);

    const onSubmit = (values) => {
        usePUT({
            path: "/user/infof",
            body: { ...values, birth_date: dayjs(values.birth_date).format() },
            config: undefined,
            setIsPUTTING,
            callback: (res) => {
                if (res) return addToast(res.message, { appearance: "success", autoDismiss: true });
            },
            errorCallback: (err) => {
                if (err) return addToast("Something Gone Wrong...", { appearance: "error", autoDismiss: true });
            },
        });
    };

    return (
        <ProfileContainer>
            <Head>
                <title>Profile</title>
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

export default Profile;
