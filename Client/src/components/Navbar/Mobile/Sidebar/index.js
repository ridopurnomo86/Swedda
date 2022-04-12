import React from "react";
import PropTypes from "prop-types";
import { SidebarContainer, HumbergerMenu } from "./styles";
import Button from "../../../Button";
import Menu from "../Menu";

const Sidebar = ({ isOpen, isUser, handleLogout }) => (
    <HumbergerMenu transition={isOpen}>
        <SidebarContainer>
            <Menu />
            {isUser ? (
                <Button classNames="mt-m" onClick={handleLogout}>
                    <p>Logout</p>
                </Button>
            ) : (
                <Button classNames="mt-m" direction="/signin">
                    <p>Sign In</p>
                </Button>
            )}
        </SidebarContainer>
    </HumbergerMenu>
);

export default Sidebar;

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    isUser: PropTypes.bool,
    handleLogout: PropTypes.func,
};

Sidebar.defaultProps = {
    isOpen: false,
    isUser: false,
    handleLogout: () => {},
};
