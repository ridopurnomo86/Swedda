import React from "react";
import PropTypes from "prop-types";
import dayjs from "dayjs";
import nookies from "nookies";
import HeadTemplate from "src/components/Head";
import ProfileViews from "views/profile";

export async function getServerSideProps(context) {
    const cookie = nookies.get(context)[process.env.COOKIE_USER_CRENDETIAL];
    const res = await fetch(`${process.env.BACKEND_URL}/user/info`, {
        headers: {
            Cookie: `${process.env.COOKIE_USER_CRENDETIAL}=${cookie}`,
        },
    });
    const { info } = await res.json();

    if (!cookie) {
        return {
            redirect: {
                permanent: false,
                destination: "/login",
            },
        };
    }

    return {
        props: {
            data: {
                ...info,
                birth_date: dayjs(info.birth_date).format("YYYY-MM-DD"),
            },
        },
    };
}

const Profile = ({ data }) => (
    <>
        <HeadTemplate title="Profile" />
        <ProfileViews info={data} />
    </>
);

export default Profile;

Profile.propTypes = {
    data: PropTypes.any.isRequired,
};
