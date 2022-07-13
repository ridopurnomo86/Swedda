import React from "react";
import PropTypes from "prop-types";
import RenderSelect from "./renderSelect";
import { ErrorMessage, Label } from "../../styles";
import capitalizeFirstLetter from "../../modules";

const Select = ({ form, errors, register }) => {
    return (
        <>
            <Label id={form.id}>{form.label}</Label>
            <RenderSelect name={form?.name} options={form?.options} register={register} />
            {errors[form.name] && (
                <ErrorMessage>{`${capitalizeFirstLetter(
                    errors[form.name]?.message
                )}`}</ErrorMessage>
            )}
        </>
    );
};

export default Select;

Select.propTypes = {
    form: PropTypes.object,
    errors: PropTypes.object,
    register: PropTypes.func,
};

Select.defaultProps = {
    form: undefined,
    errors: undefined,
    register: () => {},
};
