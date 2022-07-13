import React, { useState, useRef, useEffect } from "react";
import useMediaQuery from "../../hooks/useMediaQuery";
import Dekstop from "./Dekstop";
import Mobile from "./Mobile";
import Session from "../../../lib/Auth";
import { Router } from "next/router";
// import useClickOutside from "../../hooks/useClickOutside";

const Navbar = () => {
    const isMobile = useMediaQuery("(min-width: 968px)");
    const [open, setOpen] = useState(false);
    const Ref = useRef(null);

    const handleBars = () => setOpen((prev) => !prev);

    const handleLogout = () => {
        Session.requestLogout();
    };

    // useClickOutside(Ref, () => {
    //     if (open) return setOpen(false);
    // });

    useEffect(() => {
        if (open) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "auto";
        }

        const start = () => {
            setOpen(true);
        };
        const end = () => {
            setOpen(false);
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, [open]);

    return isMobile ? (
        <Dekstop isUser={Session.getUser()} />
    ) : (
        <Mobile
            Ref={Ref}
            open={open}
            onClick={handleBars}
            handleLogout={handleLogout}
            isUser={Boolean(Session.getUser())}
        />
    );
};

export default Navbar;
