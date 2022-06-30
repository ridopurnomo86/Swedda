import Static from "../Static/";

export async function getServerSideProps(context) {
    const { catalogid, tutorialid } = context.params;

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
