import React, { useEffect, useRef, useState } from "react";
import Session from "lib/Auth";
import {
    LinkNavigation,
    MenuContainer,
    ProfileMenuContainer,
    LinkText,
    UserIcon,
    EllipsisIcon,
    FlexContainer,
    RightBracketIcon,
    DashboardIcon,
    Overlay,
} from "./styles";
import useClickOutside from "src/hooks/useClickOutside";
import Link from "./data";

const ProfileMenu = () => {
    const overlayRef = useRef(null);
    const [show, setShow] = useState(false);

    const handleProfileMenu = () => setShow((prev) => !prev);
    useClickOutside(overlayRef, () => setShow(false));

    const handleLogout = () => {
        Session.requestLogout();
    };

    useEffect(() => {
        if (show) return (document.body.style.overflow = "hidden");
    }, [show]);

    return (
        <>
            <Overlay isOpen={show} ref={overlayRef} />
            <ProfileMenuContainer onClick={handleProfileMenu}>
                <EllipsisIcon />
                {show && (
                    <MenuContainer>
                        {Link.map((item) => (
                            <LinkNavigation href={item.link} passHref key={item.id}>
                                <FlexContainer>
                                    {item.icon}
                                    <LinkText>{item.title}</LinkText>
                                </FlexContainer>
                            </LinkNavigation>
                        ))}

                        <FlexContainer onClick={handleLogout}>
                            <RightBracketIcon />
                            <LinkText>Logout</LinkText>
                        </FlexContainer>
                    </MenuContainer>
                )}
            </ProfileMenuContainer>
        </>
    );
};

export default ProfileMenu;
