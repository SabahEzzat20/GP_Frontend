// export const setAuthenticatedUser = (data) => {
//     // save object to the local storage
//     // Stringify OBJECT TO TEXT
//     localStorage.setItem("user", JSON.stringify(data));
// };

// export const getAuthenticatedUser = (data) => {
//     if (localStorage.getItem("user")) {
//     return JSON.parse(localStorage.getItem("user"));
//     }
// };

// export const removeAuthenticatedUser = () => {
//     if (localStorage.getItem("user"))
//         localStorage.removeItem("user");
// };


export const setAuthenticatedUser = (data) => {
    if (data.accessToken && data.refreshToken) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
    }
};

export const getAuthenticatedUser = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    return { accessToken, refreshToken };
};

export const removeAuthenticatedUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
};
