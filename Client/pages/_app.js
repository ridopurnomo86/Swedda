/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";

import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "../styles";
import theme from "../styles/theme";

import Navbar from "../src/components/Navbar";
import Footer from "../src/components/Footer";

const MyApp = ({ Component, pageProps }) => (
    <>
        <Head>
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
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
            <Component {...pageProps} />
            <Footer />
        </ThemeProvider>
    </>
);


export default MyApp;

