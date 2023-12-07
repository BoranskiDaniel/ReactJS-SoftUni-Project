import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/products'
// const token = localStorage.getItem('accessToken');

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
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

export const getOne = async (_id) => {
    const result = await request.get(`${baseUrl}/${_id}`,);

    return result;
}

export const create = async (productData) => {
    const result = await request.post(baseUrl, productData);

    return result;
}

export const edit = async (_id, productData) => {
    const result = await request.put(`${baseUrl}/${_id}`, productData);

    return result;
}

export const del = async (_id) => request.remove(`${baseUrl}/${_id}`);
