import { useEffect, useState } from "react";
import Router from "next/router";
import NProgress from "nprogress";

const useRouteChange = () => {
    const [isLoading, setIsLoading] = useState(false);

    useEffect(() => {
        const start = () => {
            setIsLoading(true);
            NProgress.start();
        };
        const end = () => {
            setIsLoading(false);
            NProgress.done();
        };

        Router.events.on("routeChangeStart", start);
        Router.events.on("routeChangeComplete", end);
        Router.events.on("routeChangeError", end);

        return () => {
            Router.events.off("routeChangeStart", start);
            Router.events.off("routeChangeComplete", end);
            Router.events.off("routeChangeError", end);
        };
    }, []);

    return { isLoading };
};

export default useRouteChange;
