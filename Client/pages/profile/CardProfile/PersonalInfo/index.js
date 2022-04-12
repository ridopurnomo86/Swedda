import React from "react";
import PropTypes from "prop-types";
import Form from "../../../../src/components/Form";
import { PersonalInfoContainer, ButtonForm } from "./styles";

const PersonalInfo = ({ register, handleSubmit, errors, isLoading, onSubmit, defaultValue }) => (
    <PersonalInfoContainer>
        <Form
            FormList={[
                {
                    id: "email",
                    label: "Email",
                    name: "email",
                    placeholder: "Email...",
                    type: "text",
                    validation: { required: true },
                    defaultValue: defaultValue?.email,
                },
                // {
                //     id: "image_profile",
                //     label: "Image Profile",
                //     name: "image_profile",
                //     placeholder: "image_profile",
                //     type: "file",
                //     validation: { required: true },
                // },
                {
                    id: "gender",
                    label: "Gender",
                    name: "gender",
                    placeholder: "gender...",
                    type: "select",
                    options: [
                        { key: "No Gender", value: "unisex" },
                        { key: "Male", value: "male" },
                        { key: "Female", value: "female" },
                    ],
                    validation: { required: true },
                },
            ]}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        >
            <ButtonForm classNames="mt-m" padding="16px" type="submit" disable={isLoading}>
                Edit Profile
            </ButtonForm>
        </Form>
    </PersonalInfoContainer>
);

export default PersonalInfo;

PersonalInfo.propTypes = {
    register: PropTypes.any.isRequired,
    handleSubmit: PropTypes.any.isRequired,
    errors: PropTypes.any.isRequired,
    isLoading: PropTypes.bool,
    onSubmit: PropTypes.func,
    defaultValue: PropTypes.object,
};

PersonalInfo.defaultProps = {
    isLoading: false,
    onSubmit: () => {},
    defaultValue: {},
};
