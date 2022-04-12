import React, { useState, useRef, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Dekstop from "./Dekstop";
import Mobile from "./Mobile";
import Session from "../../../lib/Auth";
// import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
    const isMobile = useMediaQuery("(min-width: 968px)");

    const [open, setOpen] = useState(false);
    const Ref = useRef(null);

    const handleBars = () => {
        setOpen((prev) => !prev);
    };

    const handleLogout = () => {
        Session.requestLogout();
    };

    // Click Outside
    // useClickOutside(Ref, () => {
    //     if (open && Ref) return setOpen(false);
    // });

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }
    }, [open]);

    return isMobile ? (
        <Dekstop isUser={Session.getUser()} />
    ) : (
        <Mobile
            refContainer={Ref}
            open={open}
            onClick={handleBars}
            handleLogout={handleLogout}
            isUser={Boolean(Session.getUser())}
        />
    );
};

export default Navbar;
