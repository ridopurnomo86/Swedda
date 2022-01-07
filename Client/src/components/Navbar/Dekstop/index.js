import React from "react";
import PropTypes from "prop-types";
import Link from "next/link";
import {
    LogoContainer,
    MenuContainer,
    NavbarContainer,
    ChildContainer,
} from "./styles";
import Button from "../../Button";
import Menu from "./Menu";

import Session from "../../../../lib/Auth";


const Dekstop = ({ isUser }) => ( 
    <NavbarContainer>
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
                { isUser ? (
                    <Button onClick={() => Session.requestLogout()}>
                        <p className="pointer">Logout</p>
                    </Button>
                ) : ( 

                    <Button direction="/signup">
                        <p className="pointer">Sign Up</p>
                    </Button>
                ) }
            </MenuContainer>
        </ChildContainer>
    </NavbarContainer>
);

 
export default Dekstop;


Dekstop.propTypes = {
    isUser: PropTypes.object
};

Dekstop.defaultProps = {
    isUser: undefined
};