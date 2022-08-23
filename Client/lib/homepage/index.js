export async function loadCatalog() {
    const res = await fetch(`${process.env.BACKEND_URL}/catalog`);
    const { data } = await res.json();

    return data;
}
