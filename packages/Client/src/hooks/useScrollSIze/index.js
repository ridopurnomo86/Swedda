import { useEffect, useState } from "react";

const useScrollSize = () => {
    const [onScroll, setOnScroll] = useState(0);

    useEffect(() => {
        const onScrollY = () => setOnScroll(window.scrollY);
        window.addEventListener("scroll", onScrollY);

        return () => {
            window.removeEventListener("scroll", onScrollY);
        };
    }, [onScroll]);

    return { onScroll };
};

export default useScrollSize;
