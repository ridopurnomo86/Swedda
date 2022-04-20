import React from "react";
import PropTypes from "prop-types";
import { SidebarContainer, SidebarMenu } from "./styles";
import Button from "../../../Button";
import Menu from "../Menu";
import ProfileMenu from "../ProfileMenu";

const Sidebar = ({ isOpen = false, isUser, handleLogout, sidebarRef }) => (
    <SidebarMenu transition={isOpen} ref={sidebarRef}>
        <SidebarContainer>
            <Menu />
            {isUser && <ProfileMenu />}
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
    </SidebarMenu>
);

export default Sidebar;

Sidebar.propTypes = {
    isOpen: PropTypes.bool,
    isUser: PropTypes.bool,
    handleLogout: PropTypes.func,
    sidebarRef: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
};

Sidebar.defaultProps = {
    isOpen: false,
    isUser: false,
    handleLogout: () => {},
    sidebarRef: undefined,
};
