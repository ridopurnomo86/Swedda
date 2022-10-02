/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect, useRef } from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { TutorialContainer } from "./styles";

const LeftMenu = dynamic(() => import("./LeftMenu"));
const RightMenu = dynamic(() => import("./RightMenu"));

const TutorialAcademies = ({ tutorial, pages }) => {
    const router = useRouter();
    const { tutorialid, catalogid } = router.query;
    const currPageRef = useRef(0);

    const handleNextPage = async () => {
        if (currPageRef.current < 0 || currPageRef.current !== pages.length - 1) {
            currPageRef.current += 1;
            await router.push({
                query: {
                    catalogid,
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
                    catalogid,
                    tutorialid: pages[currPageRef.current],
                },
            });
        }
    };

    useEffect(() => {
        const page = pages?.indexOf(parseInt(tutorialid));
        const renderPage = () => {
            currPageRef.current = page;
        };

        renderPage();
    }, [pages]);

    return (
        <TutorialContainer>
            <LeftMenu catalogid={catalogid} />
            <RightMenu
                tutorial={tutorial}
                tutorialid={tutorialid}
                disableNext={Boolean(currPageRef.current === pages?.length - 1)}
                disablePrev={Boolean(currPageRef.current === 0)}
                onClickNextPage={handleNextPage}
                onClickPreviousPage={handlePreviousPage}
            />
        </TutorialContainer>
    );
};

export default TutorialAcademies;

TutorialAcademies.propTypes = {
    tutorial: PropTypes.arrayOf(PropTypes.object),
    pages: PropTypes.arrayOf(PropTypes.any),
};

TutorialAcademies.defaultProps = {
    tutorial: undefined,
    pages: undefined,
};
