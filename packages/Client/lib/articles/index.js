export async function getArticles() {
    const res = await fetch(
        `${process.env.NEWS_API_URL}top-headlines?country=us&category=business&apiKey=${process.env.NEWS_API_KEY}`
    );
    const { articles } = await res.json();

    return articles;
}
