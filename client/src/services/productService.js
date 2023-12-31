import * as request from "../lib/request";

const baseUrl = 'http://localhost:3030/data/products'
// const token = localStorage.getItem('accessToken');

export const getAll = async () => {
    const result = await request.get(baseUrl);

    return result;
};

export const getMyProduct = async (_id) => {
    const result = await request.get(baseUrl, _id);

    return result;
}

export const getOne = async (productId) => {
    const result = await request.get(`${baseUrl}/${productId}`,);

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
