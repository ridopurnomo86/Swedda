/* eslint-disable react/prop-types */
import React from "react";
import Head from "next/head";
import Dynamic from "next/dynamic";
import { ToastProvider } from "react-toast-notifications";

import { ThemeProvider } from "styled-components";
import { GlobalStyle, NavbarTopSpacing } from "../styles";
import theme from "../styles/theme";

import Footer from "../src/components/Footer";
import useRouteChange from "../src/hooks/useRouteChange";
import BlurContainer from "./styles";

const Navbar = Dynamic(() => import("../src/components/Navbar"));

const MyApp = ({ Component, pageProps }) => {
    const { isLoading } = useRouteChange();

    return (
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
                    href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
                    integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
                <link
                    rel="stylesheet"
                    href="https://cdnjs.cloudflare.com/ajax/libs/nprogress/0.2.0/nprogress.min.css"
                    integrity="sha512-42kB9yDlYiCEfx2xVwq0q7hT4uf26FUgSIZBK8uiaEnTdShXjwr8Ip1V4xGJMg3mHkUt9nNuTDxunHF0/EgxLQ=="
                    crossOrigin="anonymous"
                    referrerPolicy="no-referrer"
                />
            </Head>
            <GlobalStyle />
            <ThemeProvider theme={theme}>
                <ToastProvider placement="bottom-center">
                    <BlurContainer active={isLoading}>
                        <Navbar s />
                        <NavbarTopSpacing />
                        <Component {...pageProps} />
                        <Footer />
                    </BlurContainer>
                </ToastProvider>
            </ThemeProvider>
        </>
    );
};

export default MyApp;
