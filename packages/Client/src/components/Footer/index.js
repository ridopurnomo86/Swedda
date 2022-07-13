import React from "react";
import { FooterContainer, InfoContainer, TextInfo, Container, Copyright } from "./styles";
import ListLink from "./ListLink";

const Footer = () => (
    <FooterContainer>
        <Container>
            <InfoContainer>
                <h1>Swedda</h1>
                <TextInfo>
                    Swedda is platform to learing more about bussiness course, and improve your
                    skill bussiness future.
                </TextInfo>
            </InfoContainer>
            <ListLink />
        </Container>
        <Copyright>
            <TextInfo>&#169;2022 Swedda All rights reserved.</TextInfo>
        </Copyright>
    </FooterContainer>
);

export default Footer;
