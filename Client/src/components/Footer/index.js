import React from "react";
import { 
    FooterContainer, 
    InfoContainer, 
    TextInfo, 
    Container, 
    ListLink,
    SupportList 
} from "./styles";
import Link from "next/link";


const MenuLink = {
    "/catalog": "Catalog",
    "/events": "Events",
    "/articles": "Articles"
};

const SupportLink = {
    "/terms": "Terms & Condition",
    "/faq": "Faq",
    "/help": "Help"
};



const Footer = () => (
    <FooterContainer>
        <Container>
            <InfoContainer>
                <h1>Swedda</h1>
                <TextInfo>Swedda is platform to learing more about bussiness course, and improve your skill bussiness future.
                </TextInfo>
            </InfoContainer>
            <ListLink>
                <h3>Quick Link</h3>
                {Object.keys(MenuLink).map((link) => (
                    <Link href={link} key={link}>
                        <p className="pointer mx-s semibold">{MenuLink[link]}</p>
                    </Link>
                )
                )}
            </ListLink>
            <SupportList>
                <h3>Support</h3>
                {Object.keys(SupportLink).map((link) => (
                    <Link href={link} key={link}>
                        <p className="pointer mx-s semibold">{SupportLink[link]}</p>
                    </Link>
                )
                )}
            </SupportList>
        </Container>
    </FooterContainer>        
);


export default Footer;                                                                                                               