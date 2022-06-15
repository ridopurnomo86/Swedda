import { getCatalog, getCatalogDetail } from "lib/catalog";
import STATIC_DATA from "../Static/static-data";

export async function getStaticPaths() {
    const data = await getCatalog();
    const tutorialid = STATIC_DATA.map((item) => item.tutorial_id);
    const paths = data.map((info, index) => ({
        params: {
            catalogid: "2",
            tutorialid: `${tutorialid[index]}`,
        },
    }));

    return {
        paths,
        fallback: false,
    };
}

export async function getStaticProps(context) {
    const { catalogid } = context.params;
    const data = await getCatalogDetail(catalogid);
    const tutorialData = STATIC_DATA;
    const pages = STATIC_DATA.map((value) => value.tutorial_id);

    if (data === undefined || !data) {
        return {
            notFound: true,
        };
    }

    return {
        props: {
            tutorial: tutorialData ? tutorialData : null,
            pages: pages ? pages : null,
        },
    };
}
