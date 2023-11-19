const baseUrl = 'http://localhost:3030/jsonstore/users';

export const getAll = async () => {
    const response = await fetch(baseUrl);
    const result = await response.json();

    const data = Object.values(result);

    return data;
};

export const getOne = async (userId) => {
    const response = await fetch(`${baseUrl}/${userId}`);
    const result = await response.json();

    return result;
}

export const login = async () => {
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body),
    })
    const result = await response.json();

    console.log(result);

    return result;
}
