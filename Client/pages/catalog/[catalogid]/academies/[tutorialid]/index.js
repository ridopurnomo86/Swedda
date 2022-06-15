import React, { useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { TutorialContainer } from "./styles";
import Head from "next/head";

const LeftMenu = dynamic(() => import("./LeftMenu"));
const RightMenu = dynamic(() => import("./RightMenu"));

export { getStaticPaths, getStaticProps } from "./helpers";

const Tutorial = ({ tutorial, pages }) => {
    const router = useRouter();
    const { tutorialid } = router.query;
    const currPageRef = useRef(0);

    const handleNextPage = async () => {
        if (currPageRef.current < 0 || currPageRef.current !== pages.length - 1) {
            currPageRef.current += 1;
            await router.replace({
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

    return (
        <>
            <Head>
                <title>Academic</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TutorialContainer>
                <LeftMenu tutorialid={tutorialid} />
                <RightMenu
                    tutorial={tutorial}
                    tutorialid={tutorialid}
                    disableNext={Boolean(currPageRef.current === pages.length - 1)}
                    disablePrev={Boolean(currPageRef.current === 0)}
                    onClickNextPage={handleNextPage}
                    onClickPreviousPage={handlePreviousPage}
                />
            </TutorialContainer>
        </>
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
