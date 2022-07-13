import React from "react";
import dynamic from "next/dynamic";
import PropTypes from "prop-types";
import Link from "next/link";
import {
    MobileContainer,
    LogoContainer,
    HumbergerContainer,
    ContentContainer,
    HumbergerIcon,
    CloseIcon,
} from "./styles";

const Sidebar = dynamic(() => import("./Sidebar"), { ssr: false });

const Mobile = ({ open = false, onClick, isUser, handleLogout, Ref }) => (
    <MobileContainer>
        <ContentContainer>
            <LogoContainer transition={open}>
                <Link href="/" passHref>
                    <h1 className="pointer">Swedda</h1>
                </Link>
            </LogoContainer>
            <HumbergerContainer onClick={onClick}>
                {open ? <CloseIcon /> : <HumbergerIcon />}
            </HumbergerContainer>
            <Sidebar isOpen={open} isUser={isUser} handleLogout={handleLogout} sidebarRef={Ref} />
        </ContentContainer>
    </MobileContainer>
);

export default Mobile;

Mobile.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
    Ref: PropTypes.oneOfType([PropTypes.func, PropTypes.shape({ current: PropTypes.any })]),
    isUser: PropTypes.bool,
    handleLogout: PropTypes.func,
};

Mobile.defaultProps = {
    open: false,
    onClick: () => {},
    handleLogout: () => {},
    Ref: null,
    isUser: false,
};
