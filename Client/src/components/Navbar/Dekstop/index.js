import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { LogoContainer, MenuContainer, NavbarContainer, ChildContainer } from "./styles";
import Button from "../../Button";
import Menu from "./Menu";

import ProfileMenu from "./ProfileMenu";

const Dekstop = ({ isUser }) => {
    const [onScroll, setOnScroll] = useState(null);

    useEffect(() => {
        const media = document.body.getBoundingClientRect();
        const onScrollY = () => setOnScroll(media.y);

        window.addEventListener("scroll", onScrollY);

        return () => window.removeEventListener("scroll", onScrollY);
    }, [onScroll]);

    return (
        <>
            <NavbarContainer isScroll={Boolean(onScroll >= -21)}>
                <ChildContainer>
                    <MenuContainer>
                        <LogoContainer>
                            <Link href="/">
                                <h1 className="pointer">Swedda</h1>
                            </Link>
                        </LogoContainer>
                        <Menu />
                    </MenuContainer>
                    <MenuContainer>
                        {isUser ? (
                            <ProfileMenu />
                        ) : (
                            <Button direction="/signin">
                                <p className="pointer">Sign In</p>
                            </Button>
                        )}
                    </MenuContainer>
                </ChildContainer>
            </NavbarContainer>
        </>
    );
};

export default Dekstop;

Dekstop.propTypes = {
    isUser: PropTypes.object,
};

Dekstop.defaultProps = {
    isUser: undefined,
};
