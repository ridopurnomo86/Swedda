import nookies from "nookies";

export async function getEvents() {
    const res = await fetch(`${process.env.BACKEND_URL}/events/`);
    const { data: events } = await res.json();
    return events;
}

export async function getUserToken(context) {
    const cookie = nookies.get(context);
    const token = cookie[`${process.env.COOKIE_USER}`];
    return token;
}
