import React, { useState, useRef } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Dekstop from "./Dekstop";
import Mobile from "./Mobile";

import Session from "../../../lib/Auth";

import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
    const isMobile = useMediaQuery("(min-width: 968px)");

    const [open, setOpen] = useState(false);
    const Ref = useRef(null);

    const handleBars = () => {
        setOpen(!open);
    };

    // Click Outside
    useClickOutside(Ref, () => {
        if (open) return setOpen(false);
    });

    return isMobile ? (
        <Dekstop isUser={Session.getUser()} />
    ) : (
        <Mobile refContainer={Ref} open={open} onClick={handleBars} />
    );
};

export default Navbar;
