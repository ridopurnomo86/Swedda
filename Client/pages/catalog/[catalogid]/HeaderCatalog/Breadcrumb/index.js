import React, { useRef } from "react";
import PropTypes from "prop-types";
import { BreadcrumbInfo, BreadcrumbLink } from "./styles";

const Breadcrumb = ({ stateLink, setStateLink }) => {
    const refLink = useRef(null);
    const link = ["Campaign", "Comments"];

    return (
        <BreadcrumbInfo>
            {link.map((item, key) => (
                <BreadcrumbLink key={key} active={stateLink === key} onClick={() => setStateLink(key)} ref={refLink}>
                    {item}
                </BreadcrumbLink>
            ))}
        </BreadcrumbInfo>
    );
};

export default Breadcrumb;

Breadcrumb.propTypes = {
    stateLink: PropTypes.number.isRequired,
    setStateLink: PropTypes.func.isRequired,
};
