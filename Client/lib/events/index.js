export async function getEvents() {
    const res = await fetch(`${process.env.BACKEND_URL}/events/`);
    const { data: events } = await res.json();
    return events;
}
