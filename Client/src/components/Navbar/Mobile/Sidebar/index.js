import React from "react";
import PropTypes from "prop-types";
import { SidebarContainer, HumbergerMenu } from "./styles";
import Button from "../../../Button";
import Menu from "../Menu";

import Session from "../../../../../lib/Auth";

const Sidebar = ({ isOpen, isUser }) => (
    <HumbergerMenu transition={isOpen}>
        <SidebarContainer>
            <Menu />
            {isUser ? (
                <Button classNames="mt-m" onClick={() => Session.requestLogout()}>
                    Logout
                </Button>
            ) : (
                <Button classNames="mt-m" direction="/signin">
                    Sign in
                </Button>
            )}
        </SidebarContainer>
    </HumbergerMenu>
);

export default Sidebar;

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    isUser: PropTypes.bool,
};

Sidebar.defaultProps = {
    isOpen: false,
    isUser: false,
};
