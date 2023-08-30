

export const getToken = () => {
    return localStorage.getItem('refreshToken');
}

export const putToken = (refreshToken) => {
    return localStorage.setItem('refreshToken', refreshToken);
}