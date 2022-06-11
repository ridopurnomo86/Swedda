import React from "react";
import { useRouter } from "next/router";
import PropTypes from "prop-types";
import dynamic from "next/dynamic";
import { TutorialContainer } from "./styles";
import { getCatalog, getCatalogDetail } from "../../../../../lib/catalog";
import STATIC_DATA from "./Static/static-data";
import Head from "next/head";

const LeftMenu = dynamic(() => import("./LeftMenu"));
const RightMenu = dynamic(() => import("./RightMenu"));

export async function getStaticPaths() {
    const data = await getCatalog();
    const tutorialid = STATIC_DATA.map((item) => item.tutorial_id);
    const paths = data.map((info, index) => ({
        params: {
            catalogid: "2",
            tutorialid: `${tutorialid[index]}`,
        },
    }));

    console.log(paths);
    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { catalogid } = context.params;
    const data = await getCatalogDetail(catalogid);
    const tutorialData = STATIC_DATA;
    if (data === undefined || !data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            tutorial: tutorialData ? tutorialData : null,
        },
    };
}

const Tutorial = ({ tutorial }) => {
    const router = useRouter();
    const { tutorialid } = router.query;

    return (
        <>
            <Head>
                <title>Academic</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <TutorialContainer>
                <LeftMenu tutorialid={tutorialid} />
                <RightMenu tutorial={tutorial} tutorialid={tutorialid} />
            </TutorialContainer>
        </>
    );
};

export default Tutorial;

Tutorial.propTypes = {
    tutorial: PropTypes.arrayOf(PropTypes.object),
};

Tutorial.defaultProps = {
    tutorial: undefined,
};
