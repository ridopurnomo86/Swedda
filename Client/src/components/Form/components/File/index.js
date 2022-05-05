import React from "react";
import PropTypes from "prop-types";
import { ErrorMessage, Input } from "../../styles";
import capitalizeFirstLetter from "../../modules";

const File = ({ form, errors, register }) => (
    <>
        <Input
            id={form?.id}
            name={form?.name}
            placeholder={form?.placeholder}
            type={form?.type}
            defaultValue={form?.defaultValue}
            {...register(form?.name, form?.validation && { ...form?.validation })}
            error={errors[form?.name]}
        />
        {errors[form.name] && <ErrorMessage>{`${capitalizeFirstLetter(errors[form.name]?.message)}`}</ErrorMessage>}
    </>
);

export default File;

File.propTypes = {
    form: PropTypes.object,
    errors: PropTypes.object,
    register: PropTypes.func,
};

File.defaultProps = {
    form: undefined,
    errors: undefined,
    register: () => {},
};
