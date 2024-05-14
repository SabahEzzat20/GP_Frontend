export const setAuthenticatedUser = (data) => {
    if (data.accessToken && data.refreshToken && data.id && data.name && data.email && data.role) {
        localStorage.setItem("accessToken", data.accessToken);
        localStorage.setItem("refreshToken", data.refreshToken);
        localStorage.setItem("id", data.id);
        localStorage.setItem("role", data.role);
        localStorage.setItem("email", data.email);
        localStorage.setItem("name", data.name);
    }
};

export const getAuthenticatedUser = () => {
    const accessToken = localStorage.getItem("accessToken");
    const refreshToken = localStorage.getItem("refreshToken");
    const id = localStorage.getItem("id");
    const role = localStorage.getItem("role");
    const email = localStorage.getItem("email");
    const name = localStorage.getItem("name");
    return { accessToken, refreshToken ,id,role,email,name};
};
//logout
export const removeAuthenticatedUser = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("id");
    localStorage.removeItem("role");
    localStorage.removeItem("email");
    localStorage.removeItem("name");
};




// export const userData = (data) => {
//     if (data.role && data.id  ) {
//         localStorage.setItem("accessToken", data.role);
//         localStorage.setItem("refreshToken", data.id);
//     }
// }