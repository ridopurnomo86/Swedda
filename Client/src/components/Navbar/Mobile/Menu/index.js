import React from "react";
import Link from "next/link";
import { MenuContainer, MenuList, TextLink } from "./styles";

const MenuLink = {
    "/catalog": "Catalog",
    "/events": "Events",
    "/articles": "Articles",
};

const Menu = () => (
    <MenuContainer>
        {Object.keys(MenuLink).map((link) => (
            <MenuList key={link}>
                <Link href={link} passHref>
                    <TextLink className="link">{MenuLink[link]}</TextLink>
                </Link>
            </MenuList>
        ))}
    </MenuContainer>
);

export default Menu;
