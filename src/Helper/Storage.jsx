export const setAuthenticatedUser = (data) => {
    if (data.accessToken && data.refreshToken ) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
    }
};

export const getAuthenticatedUser = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
};
//logout
export const removeAuthenticatedUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};




export const userData = (data) => {
    if (data.role && data.id  ) {
        localStorage.setItem("accessToken", data.role);
        localStorage.setItem("refreshToken", data.id);
    }
}