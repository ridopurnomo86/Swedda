import React from "react";
import PropTypes from "prop-types";
import { FormContainer, Input, Label, ErrorMessage } from "./styles";
import RenderSelect from "./renderSelect";

const Form = ({ FormList = [], register, handleSubmit, errors, onSubmit, children }) => (
    <form onSubmit={handleSubmit(onSubmit)}>
        {FormList.map((form) => (
            <FormContainer key={form.id}>
                {form?.type === "select" && (
                    <>
                        <Label id={form.id}>{form.label}</Label>
                        <RenderSelect name={form?.name} options={form?.options} register={register} />
                        {errors[form.name] && <ErrorMessage>This field Must Required</ErrorMessage>}
                    </>
                )}
                {form?.type === "file" && (
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
                        {errors[form.name] && <ErrorMessage>This field Must Required</ErrorMessage>}
                    </>
                )}
                {form?.type !== "select" && form?.type !== "file" && (
                    <>
                        <Label id={form.id}>{form.label}</Label>
                        <Input
                            id={form?.id}
                            name={form?.name}
                            placeholder={form?.placeholder}
                            type={form?.type}
                            defaultValue={form?.defaultValue}
                            {...register(form?.name, form?.validation && { ...form?.validation })}
                            error={errors[form?.name]}
                        />
                        {errors[form.name] && <ErrorMessage>{`${errors[form.name]?.message}`}</ErrorMessage>}
                    </>
                )}
            </FormContainer>
        ))}
        {children}
    </form>
);

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
