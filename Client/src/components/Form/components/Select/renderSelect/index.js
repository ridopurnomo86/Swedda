import React from "react";
import PropTypes from "prop-types";
import { Select, Option } from "./styles";

const RenderSelect = ({ name, options = [], register }) => (
    <Select name={name} id={name} {...register(name)}>
        {options?.map((item) => (
            <Option value={`${item.value}`} key={item?.key}>
                {item?.key}
            </Option>
        ))}
    </Select>
);

export default RenderSelect;

RenderSelect.propTypes = {
    name: PropTypes.string,
    register: PropTypes.any.isRequired,
    options: PropTypes.arrayOf(PropTypes.object).isRequired,
    selected: PropTypes.string,
};

RenderSelect.defaultProps = {
    name: "",
    options: undefined,
    selected: "",
};
