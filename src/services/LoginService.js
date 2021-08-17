import url from "../utils/BaseURL";

const LoginService = async (username, password) => {
    let resp = "";
    let loginUrl = url.baseUrl + "/api/users/login/";
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({username: username, password: password, email: username, RoleId: 1})
    };
    fetch(
        loginUrl
        , options
    ).then(resp => resp.json())
        .then((response) => {
            console.log("Response from Backend", response)
            return response;
        }).catch((error) => {
        console.log("Error ", error)
    });
}
export default LoginService;