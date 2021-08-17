import React from "react";
import {CardContent, Grid, Paper} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";

export default function MyCard(props) {
    const classes = ContainerStyles();
    return (
        <Grid>
            <Paper className={classes.loginPaper}>
                <CardContent>
                    {props.children}
                </CardContent>
            </Paper>
        </Grid>
    );
}