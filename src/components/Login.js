import React from "react";
import MyCard from "./MyCard";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import {useHistory} from "react-router-dom";
import ConfigurableToast from "../utils/ConfigurableToast";
import url from "../utils/BaseURL";


export default function Login() {
    const toast = new ConfigurableToast();
    let history = useHistory();
    const classes = ContainerStyles();
    const [state, setState] = React.useState({
        username: "",
        password: "",
        token: "",
        isLoading: false
    });

    const handleUserChange = (userVal) => {
        setState({
            ...state,
            username: userVal
        });
    }
    const handlePassChange = (passVal) => {
        setState({
            ...state,
            password: passVal
        });
    }

    function handleLogin() {
        history.push("/home");
        setState({
            ...state,
            isLoading: true
        })
        if (state.username.length < 4 || state.password.length < 4)
            return;
        let loginUrl = url.baseUrl + "/api/users/login/";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: state.username, password: state.password, email: state.username, RoleId: 1})
        };
        fetch(loginUrl
            , options).then((response) => response.json())
            .then((data) => {
                const jsonData = JSON.parse(JSON.stringify(data));
                if (jsonData.User.token != null) {
                    sessionStorage.setItem("token", jsonData.User.token);
                    sessionStorage.setItem("user", jsonData.User.username);

                    setState({
                        ...state,
                        isLoading: false
                    });
                    toast.showSuccessToast(data.message)
                } else {
                    setState({
                        ...state,
                        isLoading: false
                    })
                    toast.showErrorToast(data.message)
                }

            }).catch((error) => {
            setState({
                ...state,
                isLoading: false
            })
            console.log("Error ", error)
        });


    }

    return (
        <Grid justifyContent="center" alignItems="center" style={{
            minHeight: "100vh"
        }} container>
            <Grid
                container
                spacing={0}
                direction="column"
                alignItems="center"
                justifyContent="center"
                alignContent="center"
            >
                <MyCard>
                    <Grid justifyContent="center" alignItems="center" alignContent="center" container>
                        <Typography className={classes.headers}>Enter your login details</Typography>
                    </Grid>
                    <div style={{
                        marginTop: 50
                    }}>
                        <Grid direction="column" container>
                            <form noValidate autoComplete="off" className="form" style={{
                                marginTop: 30
                            }}>
                                <TextField id="username" label="Username" variant="outlined"
                                           fullWidth style={{
                                    marginBottom: "1em"
                                }}
                                           onChange={(val) => handleUserChange(val.target.value)}
                                           value={state.username}/>
                                <TextField id="password" label="Password" variant="outlined"
                                           type="password"
                                           fullWidth
                                           value={state.password}

                                           onChange={(val) => handlePassChange(val.target.value)}/>
                            </form>
                            <Button variant="outlined" className={classes.button} fullWidth
                                    disabled={state.isLoading}>
                                <Typography variant="h6" className={classes.buttonText}
                                            onClick={() => handleLogin()}>Login</Typography>
                            </Button>
                        </Grid>
                    </div>
                </MyCard>
            </Grid>
        </Grid>
    )
}
