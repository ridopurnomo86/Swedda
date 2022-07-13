import { useEffect, useRef } from "react";
import { useRouter } from "next/router";

const ScrollToTop = () => {
    const { pathname } = useRouter();
    const initialLoad = useRef(true);
    useEffect(() => {
        if (!initialLoad.current) window.scrollTo(0, 0);
        initialLoad.current = false;
    }, [pathname]);

    return null;
};

export default ScrollToTop;
