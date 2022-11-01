/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import nookies from "nookies";
import PropTypes from "prop-types";
import Static from "static/academies/tutorial";
import HeadTemplate from "src/components/Head";
import TutorialAcademies from "views/catalog/[catalogid]/academies/[tutorialid]";

// export async function getStaticPaths() {
//     return {
//         paths: [],
//         fallback: true,
//     };
// }

export async function getServerSideProps(context) {
    const { catalogid, tutorialid } = context.params;
    const cookie = nookies.get(context)[process.env.COOKIE_USER_CRENDETIAL];
    const res = await fetch(`${process.env.BACKEND_URL}/academies`, {
        method: "POST",
        headers: {
            Cookie: `${process.env.COOKIE_USER_CRENDETIAL}=${cookie}`,
        },
    });

    const { type } = await res.json();

    if (type !== "success") {
        return {
            redirect: {
                permanent: false,
                destination: "/",
            },
        };
    }

    const listPathId = () => {
        const paths = [];
        Static[parseInt(catalogid)]?.map(({ content }) => {
            content.map((item) => paths.push(item.tutorial_id));
        });
        return paths;
    };

    const dataContents = () => {
        const data = [];
        Static[parseInt(catalogid)]?.map(({ content }) => {
            content.map((item) => data.push(item));
        });
        return data;
    };

    if (!listPathId().includes(parseInt(tutorialid))) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            tutorial: dataContents() ? dataContents() : undefined,
            pages: listPathId() ? listPathId() : undefined,
        },
    };
}

const Tutorial = ({ tutorial, pages }) => (
    <>
        <HeadTemplate title="Academies" />
        <TutorialAcademies tutorial={tutorial} pages={pages} />
    </>
);

export default Tutorial;

Tutorial.propTypes = {
    tutorial: PropTypes.arrayOf(PropTypes.object),
    pages: PropTypes.arrayOf(PropTypes.any),
};

Tutorial.defaultProps = {
    tutorial: undefined,
    pages: undefined,
};
