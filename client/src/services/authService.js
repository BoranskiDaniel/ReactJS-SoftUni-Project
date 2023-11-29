const baseUrl = 'http://localhost:3030/users';
const token = localStorage.getItem('accessToken');

export const login = async (email, password) => {
    const response = await fetch(`${baseUrl}/login`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.status === 204) {
        return {};
    };

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const register = async (email, password) => {
    const response = await fetch(`${baseUrl}/register`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
    });

    if (response.status === 204) {
        return {};
    };

    const result = await response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}

export const logout = () => {
    const response = fetch(`${baseUrl}/logout`, {
        method: 'GET',
        headers: {
            'X-Authorization': token
        },
    });
    if (response.status === 204) {
        return {};
    }

    const result = response.json();

    if (!response.ok) {
        throw result;
    }

    return result;
}


