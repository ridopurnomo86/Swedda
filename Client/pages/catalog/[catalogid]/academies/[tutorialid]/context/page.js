import { createContext, useMemo, useState } from "react";
import PropTypes from "prop-types";

export const PageContext = createContext(null);

export const PageProvider = ({ children }) => {
    const [initialPage, setInitialPage] = useState("");

    const providerValue = useMemo(
        () => ({ initialPage, setInitialPage }),
        [initialPage, setInitialPage]
    );

    return <PageContext.Provider value={providerValue}>{children}</PageContext.Provider>;
};

PageProvider.propTypes = {
    children: PropTypes.oneOfType([PropTypes.node, PropTypes.element]).isRequired,
};
