import { getArticles } from "lib/articles";

export async function getStaticProps() {
    const articles = await getArticles();

    return {
        props: {
            data: articles ? articles : null,
        },
    };
}
