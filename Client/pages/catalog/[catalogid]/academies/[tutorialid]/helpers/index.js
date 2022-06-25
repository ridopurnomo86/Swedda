import ACCOUNTANT from "../Static/Accountant";
// import Static from "../static/";

export async function getServerSideProps(context) {
    // console.log(Static[parseInt(context.params.catalogid)]);
    const convertPathId = () => {
        const paths = [];
        ACCOUNTANT.map(({ content }) => {
            content.map((item) => paths.push(item.tutorial_id));
        });
        return paths;
    };
    const convertTutorialData = () => {
        const data = [];
        ACCOUNTANT.map(({ content }) => {
            content.map((item) => data.push(item));
        });
        return data;
    };

    return {
        props: {
            tutorial: convertTutorialData() || [],
            pages: convertPathId() || [],
        },
    };
}
