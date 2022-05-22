import React from "react";
import PropTypes from "prop-types";
import Form from "@components/Form";
import CircularLoading from "@components/CircularLoading";
import { PersonalInfoContainer, ButtonForm } from "./styles";

const PersonalInfo = ({ register, handleSubmit, errors, isLoading, onSubmit, defaultValue }) => (
    <PersonalInfoContainer>
        <Form
            FormList={[
                {
                    id: "name",
                    label: "Name",
                    name: "name",
                    placeholder: "Name...",
                    type: "text",
                },
                {
                    id: "email",
                    label: "Email",
                    name: "email",
                    placeholder: "Email...",
                    type: "text",
                },
                {
                    id: "birth_date",
                    label: "Birth Date",
                    name: "birth_date",
                    type: "date",
                },
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
                    selected: defaultValue?.gender,
                },
            ]}
            register={register}
            handleSubmit={handleSubmit}
            errors={errors}
            onSubmit={onSubmit}
        >
            <ButtonForm classNames="mt-m" padding="16px" type="submit" disable={isLoading}>
                {isLoading ? <CircularLoading /> : "Edit Profile"}
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
