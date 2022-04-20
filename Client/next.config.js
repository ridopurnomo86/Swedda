module.exports = {
    reactStrictMode: true,
    images: {
        domains: ["source.unsplash.com"],
    },
    env: {
        COOKIE_USER: process.env.COOKIE_USER,
        BACKEND_URL: process.env.BACKEND_URL,
        JWT_TOKENKEY: process.env.JWT_TOKENKEY,
        NEWS_API_KEY: process.env.NEWS_API_KEY,
        NEWS_API_URL: process.env.NEWS_API_URL,
    },
};
