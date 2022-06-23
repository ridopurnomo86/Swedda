import STATIC_DATA from "../Static/static-data";

export async function getStaticPaths() {
    const paths = STATIC_DATA.map((info) => ({
        params: {
            catalogid: `${info.catalog_id}`,
            tutorialid: `${info.tutorial_id}`,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps() {
    const tutorialData = STATIC_DATA;
    const pages = STATIC_DATA.map((value) => value.tutorial_id);

    return {
        props: {
            tutorial: tutorialData ? tutorialData : null,
            pages: pages ? pages : null,
        },
    };
}
