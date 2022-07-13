import React from "react";
import BlurContainer from "./styles";
import PropTypes from "prop-types";
import { ToastProvider } from "react-toast-notifications";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "styles";
import theme from "styles/theme";
import TheHeader from "./TheHeader";

const Layout = ({ children, isLoading }) => (
    <React.Fragment>
        <TheHeader />
        <GlobalStyle />
        <ThemeProvider theme={theme}>
            <ToastProvider placement="bottom-center">
                <BlurContainer active={isLoading}>{children}</BlurContainer>
            </ToastProvider>
        </ThemeProvider>
    </React.Fragment>
);

export default Layout;

Layout.propTypes = {
    children: PropTypes.node.isRequired,
    isLoading: PropTypes.bool.isRequired,
};
