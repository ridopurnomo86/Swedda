export async function getCatalog() {
    const res = await fetch(`${process.env.BACKEND_URL}/catalog/`);
    const { data } = await res.json();

    return data;
}

export async function getCatalogDetail(catalogid) {
    const res = await fetch(`${process.env.BACKEND_URL}/catalog/${catalogid}`);
    const { data } = await res.json();

    return data;
}

export async function getCatalogComment(catalogid) {
    const resComments = await fetch(`${process.env.BACKEND_URL}/catalog/${catalogid}/comments`);
    const { data: comments } = await resComments.json();

    return comments;
}
