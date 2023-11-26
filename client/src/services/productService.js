const baseUrl = "http://localhost:3030/data/products";
const token = localStorage.getItem('accessToken');

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getMyProduct = async (ownerId) => {
    const response = await fetch(`${baseUrl}/${ownerId}`);
    const result = await response.json();

    return result;
}

export const getOne = async (_id) => {
    const response = await fetch(`${baseUrl}/${_id}`);

    const result = await response.json();

    return result;
}

export const create = async (productData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
        body: JSON.stringify(productData)
    })
    const result = await response.json();

    return result;
}

export const edit = async (_id, productData) => {
    const response = await fetch(baseUrl, {
        body: JSON.stringify(productData)
    })
    const result = await response.json();

    return result;
}

export const del = async (_id) => {
    await fetch(`${baseUrl}/${_id}`, {
        method: 'DELETE',
        headers: {
            'X-Authorization': token
        },
    });
}