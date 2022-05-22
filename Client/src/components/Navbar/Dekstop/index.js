import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import { LogoContainer, MenuContainer, NavbarContainer, ChildContainer } from "./styles";
import Button from "../../Button";
import Menu from "./Menu";

import ProfileMenu from "./ProfileMenu";
import useScrollSize from "../../../hooks/useScrollSIze";

const Dekstop = ({ isUser }) => {
    const { onScroll } = useScrollSize();

    return (
        <>
            <NavbarContainer isScroll={Boolean(onScroll >= -21)}>
                <ChildContainer>
                    <MenuContainer>
                        <LogoContainer>
                            <Link href="/" passHref>
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
