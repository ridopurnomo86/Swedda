import React from "react";
import Link from "next/link";
import { QuickLink, SupportList, LinkTitle } from "./styles";

const MenuLink = {
    "/catalog": "Catalog",
    "/events": "Events",
    "/articles": "Articles",
};

const SupportLink = {
    "/terms": "Terms & Condition",
    "/faq": "Faq",
    "/help": "Help",
};

const ListLink = () => (
    <>
        <QuickLink>
            <LinkTitle>Quick Link</LinkTitle>
            {Object.keys(MenuLink).map((link) => (
                <Link href={link} key={link} passHref>
                    <p className="pointer mx-s semibold">{MenuLink[link]}</p>
                </Link>
            ))}
        </QuickLink>
        <SupportList>
            <LinkTitle>Support</LinkTitle>
            {Object.keys(SupportLink).map((link) => (
                <Link href={link} key={link} passHref>
                    <p className="pointer mx-s semibold">{SupportLink[link]}</p>
                </Link>
            ))}
        </SupportList>
    </>
);

export default ListLink;
