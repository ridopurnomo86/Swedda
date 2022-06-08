import React, { useState } from "react";
import PropTypes from "prop-types";
import { AccordionContainer, ArrowIcon, TextAccordion } from "./styles";

const Accordion = ({ text = "" }) => {
    const [active, setActive] = useState(false);
    return (
        <AccordionContainer onClick={() => setActive((prev) => !prev)}>
            <TextAccordion>{text}</TextAccordion>
            <ArrowIcon active={active} />
        </AccordionContainer>
    );
};

export default Accordion;

Accordion.propTypes = {
    text: PropTypes.string,
};

Accordion.defaultProps = {
    text: "",
};
