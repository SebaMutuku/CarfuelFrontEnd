import React from "react";
import MyCard from "./MyCard";
import {
    Button,
    Grid,
    TextField,
    Typography
} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import {useHistory} from "react-router-dom";
import ConfigurableToast from "../utils/ConfigurableToast";
import url from "../utils/BaseURL";


export default function Login() {
    const toast = new ConfigurableToast();
    const history = useHistory();
    const classes = ContainerStyles();
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");

    const handleUserChange = (userVal) => {
        setUsername(userVal);
    }
    const handlePassChange = (passVal) => {
        setPassword(passVal);
    }

    function handleLogin() {

        if (username.length < 8 || password.length < 8)
            return;
        let loginUrl = url.baseUrl + "/api/users/login/";
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({username: username, password: password, email: username, RoleId: 1})
        };
        fetch(loginUrl
            , options).then((response) => response.json())
            .then((data) => {
              if(data.token===null){
                  toast.showErrorToast(data.message)
              }
              else{
                  toast.showSuccessToast(data.message)

              }

            }).catch((error) => {
            console.log("Error ", error)
        });
        history.push("/home");

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
                                disabled={username.length < 8 || password.length < 8} onSubmit={() => {

                        }}>
                            <Typography variant="h6" className={classes.buttonText}
                                        onClick={() => handleLogin()}>Login</Typography>
                        </Button>
                    </Grid>
                </MyCard>
            </Grid>
        </Grid>
    )
}