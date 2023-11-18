const baseUrl = "http://localhost:3030/jsonstore/products";

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const create = async (productData) => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'content-type': 'application/json'
        },
        body: JSON.stringify(productData)
    })
    const result = await response.json();

    return result;
}

export const del = async (productId) => {
    await fetch(`${baseUrl}/${productId}`, {
        method: 'DELETE'
    });
}