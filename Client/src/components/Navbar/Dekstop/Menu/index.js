import React from "react";
import PropTypes from "prop-types";
import MenuContainer from "./styles";
import Link from "next/link";

const Menu = ({ isUser = false }) => (
    <MenuContainer className="ml-m">
        <Link href="/catalog" passHref>
            <p className="link">Catalog</p>
        </Link>
        <Link href={isUser ? "/events/dashboard" : "/events"} passHref>
            <p className="link">Events</p>
        </Link>
        <Link href="/articles" passHref>
            <p className="link">Articles</p>
        </Link>
    </MenuContainer>
);

export default Menu;

Menu.propTypes = {
    isUser: PropTypes.object,
};

Menu.defaultProps = {
    isUser: undefined,
};
