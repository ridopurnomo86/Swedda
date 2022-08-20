import React from "react";
import HeadTemplate from "src/components/Head";
import ProfileViews from "views/profile";

const Profile = () => (
    <>
        <HeadTemplate title="Profile" />
        <ProfileViews />
    </>
);

export default Profile;
