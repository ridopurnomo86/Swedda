import React from "react";
import PropTypes from "prop-types";
import  { SidebarContainer, HumbergerMenu } from "./styles";
import Button from "../../../Button";
import Menu from "../Menu";

import Session from "../../../../../lib/Auth";

const Sidebar = ({ isOpen }) => (
    <HumbergerMenu transition={isOpen}>
        <SidebarContainer>
            <Menu />
            <Button classNames="mt-m" onClick={() => Session.requestLogout()}>Logout</Button>
        </SidebarContainer>
    </HumbergerMenu>
);

 
export default Sidebar;

Sidebar.propTypes = {
    isOpen: PropTypes.bool.isRequired
};

