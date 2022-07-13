import nookies from "nookies";

export async function loadCatalog() {
    const res = await fetch(`${process.env.BACKEND_URL}/catalog`);
    const { data } = await res.json();

    return data;
}

export async function getUserToken(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];

    return token;
}
