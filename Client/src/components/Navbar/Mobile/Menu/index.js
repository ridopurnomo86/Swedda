import React from "react";
import  { MenuContainer, MenuList } from "./styles";
import Link from "next/link";

const MenuLink = {
    "/catalog": "Catalog",
    "/events": "Events",
    "/articles": "Articles"
};

const Menu = () => (
    <MenuContainer>
        {Object.keys(MenuLink).map((link) => (
            <MenuList key={link}>
                <Link href={link}>
                    <p className="link">{MenuLink[link]}</p>
                </Link>
            </MenuList>
        )
        )}
    </MenuContainer>
);

export default Menu;
