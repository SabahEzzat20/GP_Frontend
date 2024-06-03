export const setAuthenticatedUser = (data) => {
    sessionStorage.setItem('user', JSON.stringify(data));
};

export const getAuthenticatedUser = () => {
    if (sessionStorage.getItem('user')) {
        return JSON.parse(sessionStorage.getItem('user'));
    }
};
export const removeAuthenticatedUser = () => {
    if (sessionStorage.getItem('user'))
        sessionStorage.removeItem('user');
};
