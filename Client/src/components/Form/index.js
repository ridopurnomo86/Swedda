import React from "react";
import PropTypes from "prop-types";
import { FormContainer } from "./styles";
import Select from "./components/Select";
import File from "./components/File";
import Input from "./components/Input";

const Form = ({ FormList = [], register, handleSubmit, errors, onSubmit, children }) => {
    const renderItem = (type, fieldForm) => {
        switch (type) {
        case "select":
            return <Select errors={errors} register={register} form={fieldForm} />;
        case "file":
            return <File errors={errors} register={register} form={fieldForm} />;
        default:
            return <Input errors={errors} register={register} form={fieldForm} />;
        }
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            {FormList.map((form) => (
                <FormContainer key={form.id}>{renderItem(form?.type, form)}</FormContainer>
            ))}
            {children}
        </form>
    );
};

export default Form;

Form.propTypes = {
    FormList: PropTypes.arrayOf(PropTypes.object),
    children: PropTypes.any,
    register: PropTypes.func,
    errors: PropTypes.object,
    handleSubmit: PropTypes.func,
    onSubmit: PropTypes.func,
};

Form.defaultProps = {
    FormList: undefined,
    children: undefined,
    errors: undefined,
    register: undefined,
    handleSubmit: undefined,
    onSubmit: undefined,
};
