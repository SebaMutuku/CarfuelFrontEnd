import React from "react";
import MyCard from "./MyCard";
import {Button, Grid, TextField, Typography} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import { useNavigate } from "react-router-dom";
import ConfigurableToast from "../utils/ConfigurableToast";
import url from "../utils/BaseURL";



export default function Login() {
    const navigate = useNavigate();
    const toast = new ConfigurableToast();
    const classes = ContainerStyles();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleUserChange = (userVal) => {
        setUsername(userVal);
    }
    const handlePassChange = (passVal) => {
        setPassword(passVal);
    }

    function handleLogin() {
        if (username.length < 4 || password.length < 4)
            return;
        let loginUrl = url.baseUrl + "/api/users/login/";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password})
        };
        setLoading(true);
        fetch(loginUrl
            , options).then((response) => response.json())
            .then((data) => {
                const response = JSON.parse(JSON.stringify(data))
                localStorage.setItem("userData", JSON.stringify(data));
                if (response.user.token!=null) {
                    toast.showSuccessToast(data.message)
                    navigate("/dashboard");
                } else {
                    toast.showErrorToast(data.message)
                }

            }).catch((error) => {
            console.log("Error ", error)
        }).finally(() => setLoading(false));

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
                        <Typography className={classes.headers}>Welcome to Carfuel</Typography>
                    </Grid>
                    <Grid direction="column" container>
                        <form noValidate autoComplete="off" className="form" style={{
                            marginTop: 30
                        }}>
                            <TextField id="username" label="Username" variant="outlined"
                                       fullWidth style={{
                                marginBottom: "1em"
                            }}
                                       onChange={(val) => handleUserChange(val.target.value)}
                                       value={username}/>
                            <TextField id="password" label="Password" variant="outlined"
                                       type="password"
                                       fullWidth
                                       value={password}

                                       onChange={(val) => handlePassChange(val.target.value)}/>
                        </form>
                        <Button variant="outlined" className={classes.button} fullWidth
                                disabled={loading}>
                            <Typography variant="h6" className={classes.buttonText}
                                        onClick={() => handleLogin()}>Login</Typography>
                        </Button>
                    </Grid>
                </MyCard>
            </Grid>
        </Grid>
    )
}
