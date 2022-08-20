/* eslint-disable react/prop-types */
import React from "react";
import Dynamic from "next/dynamic";
import { NavbarTopSpacing } from "styles/index";
import Footer from "components/Footer";
import useRouteChange from "hooks/useRouteChange";

import Layout from "src/components/Layout";
import ScrollToTop from "src/components/ScrollToTop";

const Navbar = Dynamic(() => import("components/Navbar"));

const MyApp = ({ Component, pageProps }) => {
    const { isLoading } = useRouteChange();
    return (
        <Layout isLoading={isLoading}>
            <ScrollToTop />
            <Navbar />
            <NavbarTopSpacing />
            <Component {...pageProps} />
            <Footer />
        </Layout>
    );
};

export default MyApp;
