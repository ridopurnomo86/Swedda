import Static from "../Static/";
import nookies from "nookies";

export async function getServerSideProps(context) {
    const { catalogid, tutorialid } = context.params;
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];

    if (!token) {
        return {
            redirect: {
                destination: "/signin",
                permanent: false,
            },
        };
    }

    const listPathId = () => {
        const paths = [];
        Static[parseInt(catalogid)].map(({ content }) => {
            content.map((item) => paths.push(item.tutorial_id));
        });
        return paths;
    };
    const dataContents = () => {
        const data = [];
        Static[parseInt(catalogid)].map(({ content }) => {
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
