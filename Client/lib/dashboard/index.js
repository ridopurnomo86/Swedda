import nookies from "nookies";

export async function getUserToken(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];

    return token;
}
