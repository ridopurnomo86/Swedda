import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import { CardProfileContainer } from "./styles";

const CardProfile = ({ profile, errors, register, handleSubmit, onSubmit, isPUTTING = false }) => (
    <CardProfileContainer>
        <Header />
        <PersonalInfo
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            defaultValue={profile}
            onSubmit={onSubmit}
            isLoading={isPUTTING}
        />
    </CardProfileContainer>
);

export default CardProfile;

CardProfile.propTypes = {
    profile: PropTypes.object,
    errors: PropTypes.any.isRequired,
    register: PropTypes.any.isRequired,
    handleSubmit: PropTypes.any.isRequired,
    onSubmit: PropTypes.any.isRequired,
    isPUTTING: PropTypes.bool.isRequired,
};

CardProfile.defaultValue = {
    profile: undefined,
};
