import React, { useEffect, useState } from "react";
import useGET from "../api/useGET";
import nookies from "nookies";
import Head from "next/head";
import { ProfileContainer } from "./styles";
import CardProfile from "./CardProfile";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

const schema = {
    email: Yup.string().email("Must Contain Email"),
    gender: Yup.string(),
};

const Profile = () => {
    const [profile, setIsProfile] = useState(null);
    const [, setIsFetching] = useState(false);
    const [isPUTTING] = useState(false);
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm({
        resolver: yupResolver(Yup.object().shape(schema)),
    });

    useEffect(() => {
        useGET({
            path: "/user/info",
            setIsFetching,
            callback: (res) => {
                setIsProfile(res.data.info);
            },
        });
    }, []);

    const onSubmit = (values) => {
        console.log(values);
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
                profile={profile}
            />
        </ProfileContainer>
    );
};

export default Profile;

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
