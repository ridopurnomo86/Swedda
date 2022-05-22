import { useEffect, useState } from "react";

const useScrollSize = () => {
    const [onScroll, setOnScroll] = useState(null);

    useEffect(() => {
        const media = document.body.getBoundingClientRect();
        const onScrollY = () => setOnScroll(media.top);

        window.addEventListener("scroll", onScrollY);

        return () => {
            window.removeEventListener("scroll", onScrollY);
        };
    }, [onScroll]);

    return { onScroll };
};

export default useScrollSize;
