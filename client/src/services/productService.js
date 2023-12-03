const baseUrl = "http://localhost:3030/data/products";
const token = localStorage.getItem('accessToken');

export const getAll = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET'
    });
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

// export const getMyProduct = async (_ownerId) => {
//     const response = await fetch(`${baseUrl}/${_ownerId}`, {
//         method: 'GET',
//         headers: {
//             'content-type': 'application/json',
//             'X-Authorization': token
//         },
//     });
//     const result = await response.json();

//     return result;
// }

export const getOne = async () => {
    const response = await fetch(baseUrl, {
        method: 'GET',
        headers: {
            'content-type': 'application/json',
            // 'X-Authorization': token
        },
    });

    const result = await response.json();

    return result;
}

export const create = async (productData) => {
    const response = await fetch(`${baseUrl}`, {
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
    const response = await fetch(`${baseUrl}/${_id}/edit`, {
        method: 'PUT',
        headers: {
            'content-type': 'application/json',
            'X-Authorization': token
        },
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