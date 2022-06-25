/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { TutorialContainer } from "./styles";
import Head from "next/head";
import { PageProvider } from "./context/page";

const LeftMenu = dynamic(() => import("./LeftMenu"));
const RightMenu = dynamic(() => import("./RightMenu"));

export { getServerSideProps } from "./helpers";

const Tutorial = ({ tutorial, pages }) => {
    const router = useRouter();
    const { tutorialid } = router.query;
    const currPageRef = useRef(0);

    const handleNextPage = async () => {
        if (currPageRef.current < 0 || currPageRef.current !== pages.length - 1) {
            currPageRef.current += 1;
            await router.push({
                query: {
                    catalogid: "2",
                    tutorialid: pages[currPageRef.current],
                },
            });
        }
    };
    const handlePreviousPage = async () => {
        if (currPageRef.current > 0 || currPageRef.current === pages.length - 1) {
            currPageRef.current -= 1;
            await router.replace({
                query: {
                    catalogid: "2",
                    tutorialid: pages[currPageRef.current],
                },
            });
        }
    };

    useEffect(() => {
        const page = pages.indexOf(parseInt(tutorialid));
        const renderPage = () => {
            currPageRef.current = page;
        };

        renderPage();
    }, [pages]);

    return (
        <PageProvider>
            <Head>
                <title>Academic</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TutorialContainer>
                <LeftMenu />
                <RightMenu
                    tutorial={tutorial}
                    tutorialid={tutorialid}
                    disableNext={Boolean(currPageRef.current === pages.length - 1)}
                    disablePrev={Boolean(currPageRef.current === 0)}
                    onClickNextPage={handleNextPage}
                    onClickPreviousPage={handlePreviousPage}
                />
            </TutorialContainer>
        </PageProvider>
    );
};

export default Tutorial;

Tutorial.propTypes = {
    tutorial: PropTypes.arrayOf(PropTypes.object),
    pages: PropTypes.arrayOf(PropTypes.any),
};

Tutorial.defaultProps = {
    tutorial: undefined,
    pages: undefined,
};
