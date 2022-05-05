import React, { useState } from "react";
import Session from "../../../../../lib/Auth";
import {
    LinkNavigation,
    MenuContainer,
    ProfileMenuContainer,
    LinkText,
    UserIcon,
    EllipsisIcon,
    FlexContainer,
    RightBracketIcon,
} from "./styles";

const ProfileMenu = () => {
    const [show, setShow] = useState(false);

    const handleProfileMenu = () => setShow((prev) => !prev);

    const handleLogout = () => {
        Session.requestLogout();
    };

    return (
        <ProfileMenuContainer onClick={handleProfileMenu}>
            <EllipsisIcon />
            {show && (
                <MenuContainer>
                    <LinkNavigation href="/profile">
                        <FlexContainer>
                            <UserIcon />
                            <LinkText>Profile</LinkText>
                        </FlexContainer>
                    </LinkNavigation>
                    <FlexContainer onClick={handleLogout}>
                        <RightBracketIcon />
                        <LinkText>Logout</LinkText>
                    </FlexContainer>
                </MenuContainer>
            )}
        </ProfileMenuContainer>
    );
};

export default ProfileMenu;
