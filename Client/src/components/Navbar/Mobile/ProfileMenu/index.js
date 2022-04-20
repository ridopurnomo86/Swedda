import React, { useState } from "react";
import Link from "next/link";
import {
    ArrowBottom,
    ArrowRight,
    MenuContainer,
    MenuList,
    MenuListContainer,
    ProfileMenuContainer,
    TitleText,
} from "./styles";

const ProfileMenu = () => {
    const [show, setShow] = useState(false);

    const handleShowTab = () => setShow((prev) => !prev);

    return (
        <ProfileMenuContainer onClick={handleShowTab}>
            <MenuContainer>
                <TitleText>Settings</TitleText>
                {show ? <ArrowBottom /> : <ArrowRight />}
            </MenuContainer>
            {show && (
                <MenuListContainer>
                    <MenuList>
                        <Link href="/profile">
                            <TitleText className="link">Profile</TitleText>
                        </Link>
                    </MenuList>
                </MenuListContainer>
            )}
        </ProfileMenuContainer>
    );
};

export default ProfileMenu;
