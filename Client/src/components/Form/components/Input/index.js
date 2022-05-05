import React from "react";
import PropTypes from "prop-types";
import { Label, Input as InputText, ErrorMessage } from "../../styles";
import capitalizeFirstLetter from "../../modules";

const Input = ({ form, errors, register }) => {
    return (
        <>
            <Label id={form.id}>{form.label}</Label>
            <InputText
                id={form?.id}
                name={form?.name}
                placeholder={form?.placeholder}
                type={form?.type}
                {...register(form?.name, form?.validation && { ...form?.validation })}
                error={errors[form?.name]}
                disabled={form?.disabled}
            />
            {errors[form.name] && <ErrorMessage>{`${capitalizeFirstLetter(errors[form.name]?.message)}`}</ErrorMessage>}
        </>
    );
};

export default Input;

Input.propTypes = {
    form: PropTypes.object,
    errors: PropTypes.object,
    register: PropTypes.func,
};

Input.defaultProps = {
    form: undefined,
    errors: undefined,
    register: () => {},
};
