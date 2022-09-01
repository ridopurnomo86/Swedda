import React, { useState } from "react";
import PropTypes from "prop-types";
import {
    Container,
    MessageText,
    ModalContainer,
    TitleText,
    CloseIcon,
    IconContainer,
    Wrapper,
} from "./styles";

const Modal = ({ children, title, message, icon }) => {
    const [isShow, setIsShow] = useState(true);
    const handleCloseModal = () => setIsShow(false);

    return (
        isShow && (
            <Container>
                <ModalContainer>
                    <div>
                        <IconContainer onClick={handleCloseModal}>
                            <CloseIcon />
                        </IconContainer>
                        {icon}
                        <TitleText>{title}</TitleText>
                        <MessageText>{message}</MessageText>
                    </div>
                    <Wrapper>{children}</Wrapper>
                </ModalContainer>
            </Container>
        )
    );
};

export default Modal;

Modal.propTypes = {
    icon: PropTypes.node || PropTypes.element,
    children: PropTypes.node,
    title: PropTypes.string,
    message: PropTypes.string,
};

Modal.defaultProps = {
    icon: undefined,
    children: undefined,
    title: undefined,
    message: undefined,
};
