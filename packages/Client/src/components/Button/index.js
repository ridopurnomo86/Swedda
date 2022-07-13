import React from "react";
import PropTypes from "prop-types";
import ButtonContainer from "./styles";
import Link from "next/link";

const Button = ({
    type,
    children,
    padding,
    direction,
    color,
    backgroundColor,
    width,
    classNames,
    onClick,
    disabled,
}) => {
    return direction ? (
        <Link href={`${direction}`} passHref>
            <ButtonContainer
                type={type}
                padding={padding}
                textColor={color}
                backgroundColor={backgroundColor}
                width={width}
                className={classNames}
                disabled={disabled}
            >
                {children}
            </ButtonContainer>
        </Link>
    ) : (
        <ButtonContainer
            type={type}
            padding={padding}
            textColor={color}
            backgroundColor={backgroundColor}
            width={width}
            className={classNames}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </ButtonContainer>
    );
};

export default Button;

Button.propTypes = {
    children: PropTypes.node,
    padding: PropTypes.string,
    direction: PropTypes.string,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    width: PropTypes.string,
    classNames: PropTypes.string,
    type: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool,
};
Button.defaultProps = {
    children: undefined,
    padding: "",
    direction: "",
    color: "",
    backgroundColor: "",
    width: "",
    classNames: "",
    type: "",
    onClick: () => {},
    disabled: false,
};
