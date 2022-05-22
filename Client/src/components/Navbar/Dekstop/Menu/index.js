import React from "react";
import MenuContainer from "./styles";
import Link from "next/link";

const Menu = () => (
    <MenuContainer className="ml-m">
        <Link href="/catalog" passHref>
            <p className="link">Catalog</p>
        </Link>
        <Link href="/events" passHref>
            <p className="link">Events</p>
        </Link>
        <Link href="/articles" passHref>
            <p className="link">Articles</p>
        </Link>
    </MenuContainer>
);

export default Menu;
