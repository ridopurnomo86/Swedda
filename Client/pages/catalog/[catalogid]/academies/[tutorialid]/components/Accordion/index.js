import React, { useState } from "react";
import PropTypes from "prop-types";
import { useRouter } from "next/router";
import {
    AccordionContainer,
    ArrowIcon,
    TextAccordion,
    TextLinkContainer,
    Text,
    TextContainer,
} from "./styles";

const Accordion = ({ text = "", data = [] }) => {
    const { replace, query } = useRouter();
    const [active, setActive] = useState(false);
    const handleChoosingModule = (id) => replace({ query: { ...query, tutorialid: id } });
    return (
        <>
            <AccordionContainer onClick={() => setActive((prev) => !prev)}>
                <TextAccordion>{text}</TextAccordion>
                <ArrowIcon active={active} />
            </AccordionContainer>
            {active && (
                <TextLinkContainer active={active}>
                    {data.map((item) => (
                        <TextContainer
                            onClick={() => handleChoosingModule(item.tutorial_id)}
                            key={item.tutorial_id}
                        >
                            <Text isActive={item.tutorial_id === parseInt(query.tutorialid)}>
                                {item.title}
                            </Text>
                        </TextContainer>
                    ))}
                </TextLinkContainer>
            )}
        </>
    );
};

export default Accordion;

Accordion.propTypes = {
    text: PropTypes.string,
    data: PropTypes.arrayOf(PropTypes.object),
};

Accordion.defaultProps = {
    text: "",
    data: undefined,
};
