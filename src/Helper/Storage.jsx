export const setAuthenticatedUser = (data) => {
    if (data.accessToken && data.refreshToken && data.id && data.name && data.email && data.role) {
        sessionStorage.setItem("accessToken", data.accessToken);
        sessionStorage.setItem("refreshToken", data.refreshToken);
        sessionStorage.setItem("id", data.id);
        sessionStorage.setItem("role", data.role);
        sessionStorage.setItem("email", data.email);
        sessionStorage.setItem("name", data.name);
    }
};

export const getAuthenticatedUser = () => {
    const accessToken = sessionStorage.getItem("accessToken");
    const refreshToken = sessionStorage.getItem("refreshToken");
    const id = sessionStorage.getItem("id");
    const role = sessionStorage.getItem("role");
    const email = sessionStorage.getItem("email");
    const name = sessionStorage.getItem("name");
    return { accessToken, refreshToken ,id,role,email,name};
};
//logout
export const removeAuthenticatedUser = () => {
    sessionStorage.removeItem("accessToken");
    sessionStorage.removeItem("refreshToken");
    sessionStorage.removeItem("id");
    sessionStorage.removeItem("role");
    sessionStorage.removeItem("email");
    sessionStorage.removeItem("name");
};




// export const userData = (data) => {
//     if (data.role && data.id  ) {
//         sessionStorage.setItem("accessToken", data.role);
//         sessionStorage.setItem("refreshToken", data.id);
//     }
// }