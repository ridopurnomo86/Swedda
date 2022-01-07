import React from "react";
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
import Sidebar from "./Sidebar";

const Mobile = ({ open, onClick, ref }) => (
    <MobileContainer ref={ref}>
        <ContentContainer>
            <LogoContainer transition={open}>
                <Link href="/">
                    <h1 className="pointer">Swedda</h1>
                </Link>
            </LogoContainer>
            <HumbergerContainer onClick={onClick}>
                { open ? <CloseIcon /> : <HumbergerIcon />}
            </HumbergerContainer>
            <Sidebar isOpen={open} />
        </ContentContainer>
    </MobileContainer>
);

 
export default Mobile;

Mobile.propTypes = {
    open: PropTypes.bool,
    onClick: PropTypes.func,
    ref: PropTypes.oneOfType([
        PropTypes.func, 
        PropTypes.shape({ current: PropTypes.any })
    ])
};

Mobile.defaultProps = {
    open: false,
    onClick: () => {},
    ref: undefined
};