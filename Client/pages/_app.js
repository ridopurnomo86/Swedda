/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import Dynamic from "next/dynamic";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, NavbarTopSpacing } from "../styles";
import theme from "../styles/theme";

import Footer from "../src/components/Footer";

const Navbar = Dynamic(() => import("../src/components/Navbar"));

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
            <link
                href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&display=swap"
                rel="stylesheet"
            />
            <link
                rel="stylesheet"
                href="https://use.fontawesome.com/releases/v5.15.4/css/all.css"
                integrity="sha384-DyZ88mC6Up2uqS4h/KRgHuoeGwBcD4Ng9SiP4dIRy0EXTlnuz47vAwmeGwVChigm"
                crossOrigin="anonymous"
            />
        </Head>
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <Navbar />
            <NavbarTopSpacing />
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    </>
);

export default MyApp;
