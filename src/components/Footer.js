import React from "react";
import {
    Grid,
    Typography
} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import Divider from '@material-ui/core/Divider';

export default function Footer() {
    const today = new Date();
    const date = today.getFullYear();
    const classes = ContainerStyles();
    const [cardClick, setCardClicked] = React.useState(0);
    const style = {
        fontWeight: "bold",
        flexGrow: 1,
        margin: 10,
        fontSize:12,
    }
    const normalStyle = {
        fontWeight: "bold",
        fontSize:12,
        margin: 10,
        color:"#36756F"
    }
    return (
        <Grid justifyContent="space-evenly" direction="row" container className={classes.footer} alignItems="center">
            <Divider className={classes.divider} variant="fullWidth"/>
            <Typography style={style}>Copyright @{date}</Typography>
            <Typography style={normalStyle}>
                All Rights Reserved
            </Typography>
            <Typography style={normalStyle}>
                Powered By NGINX
            </Typography>
        </Grid>
    );
}
