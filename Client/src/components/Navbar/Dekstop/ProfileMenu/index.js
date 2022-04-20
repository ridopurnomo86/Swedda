import React, { useState } from "react";
import Session from "../../../../../lib/Auth";
import Button from "../../../Button";
import { LinkNavigation, MenuContainer, ProfileMenuContainer, LinkText } from "./styles";

const ProfileMenu = () => {
    const [show, setShow] = useState(false);

    const handleProfileMenu = () => setShow((prev) => !prev);

    const handleLogout = () => {
        Session.requestLogout();
    };
    return (
        <ProfileMenuContainer onClick={handleProfileMenu}>
            <i className="fa fa-user"></i>
            {show && (
                <MenuContainer>
                    <LinkNavigation href="/profile">
                        <LinkText>Profile</LinkText>
                    </LinkNavigation>
                    <Button onClick={handleLogout}>
                        <p>Logout</p>
                    </Button>
                </MenuContainer>
            )}
        </ProfileMenuContainer>
    );
};

export default ProfileMenu;
