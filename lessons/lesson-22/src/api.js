const baseApiUrl = 'http://localhost:3000';

export async function loadAll() {
    let res = await fetch(baseApiUrl + '/items');
    return await res.json();
}

export async function removeById(id) {
    let res = await fetch(`${baseApiUrl}/items/${id}`, {
        method: 'DELETE'
    });
    if (!res.ok) {
        throw new Error('Error');
    }
}

export async function create(data) {
    let res = await fetch(baseApiUrl + '/items', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    return await res.json();
}