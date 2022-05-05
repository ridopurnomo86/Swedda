import React from "react";
import PropTypes from "prop-types";
import Header from "./Header";
import PersonalInfo from "./PersonalInfo";
import { CardProfileContainer } from "./styles";

const CardProfile = ({ defaultValue, errors, register, handleSubmit, onSubmit, isPUTTING = false }) => (
    <CardProfileContainer>
        <Header
            isVerified={defaultValue?.is_verified}
            username={defaultValue?.username}
            name={defaultValue?.name}
            imageSrc={defaultValue?.image_poster}
        />
        <PersonalInfo
            errors={errors}
            register={register}
            handleSubmit={handleSubmit}
            defaultValue={defaultValue}
            onSubmit={onSubmit}
            isLoading={isPUTTING}
        />
    </CardProfileContainer>
);

export default CardProfile;

CardProfile.propTypes = {
    defaultValue: PropTypes.object,
    errors: PropTypes.any.isRequired,
    register: PropTypes.any.isRequired,
    handleSubmit: PropTypes.any.isRequired,
    onSubmit: PropTypes.any.isRequired,
    isPUTTING: PropTypes.bool.isRequired,
};

CardProfile.defaultValue = {
    defaultValue: undefined,
};
