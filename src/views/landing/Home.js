import {Grid, Paper, Typography} from "@material-ui/core";
import React from "react";
import ContainerStyles from "../../css/ContainerStyles";
import {Pie, PieChart} from "recharts"


function Home() {
    const handleChange = (event) => {
        setSpacing(Number(event.target.value));
    };


    const [clicked, setClicked] = React.useState(0);
    const classes = ContainerStyles();
    const [spacing, setSpacing] = React.useState(2);
    const rowData = [
        {"type": "New Orders", "number": 998182},
        {"type": "Delivered Orders", "number": 771828271},
        {"type": "Cancelled Orders", "number": 90},
        {"type": "Closed Orders", "number": 1002029291}]
    const allOrders = () => {

        const pieData = [
            {name: "New Orders", value: 1888281},
            {name: "Delivered Orders", value: 771828271},
            {name: "Cancelled Orders", value: 90},
            {name: "Closed Orders", value: 1002029291}]
        return (
            <Grid container justifyContent="center">
                <Grid xs={7} item>
                    <Paper className={classes.allOrders} style={{
                        flexGrow: 1,
                        marginRight: 50,
                    }}>
                    </Paper>
                </Grid>
                <Grid xs={4} item>
                    <Paper className={classes.allOrders}>
                        <PieChart width={800} height={400}>
                            <Pie cx={200} cy={200} startAngle={180} endAngle={0} data={pieData} dataKey="value" fill="red"
                                 outerRadius={80} label>
                            </Pie></PieChart>
                    </Paper>
                </Grid>
            </Grid>
        )
    }
    const homeHeader = (type, quantity, index) => {
        const getColors = (colorIndex) => {
            switch (colorIndex) {
                case 0:
                    return "#143477";
                case 1:
                    return "#1078A5 ";
                case 2:
                    return "#0A5239";
                default:
                    return "#360E3A";
            }
        }

        return (
            <Grid item xs={3} key={index}>
                <Paper className={classes.homeCard} style={{backgroundColor: getColors(index)}}>
                    <Grid direction="column" justifyContent="center" alignItems="center" alignContent="center"
                          container>
                        <Typography style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 30,
                            marginTop: 20
                        }}> {type}</Typography>
                        <Typography color="inherit" style={{
                            color: "white",
                            fontWeight: "bold",
                            fontSize: 20,
                            marginTop: 20
                        }}>
                            {quantity}
                        </Typography>
                    </Grid>
                </Paper>
            </Grid>
        );

    }

    return (
        <div>
            <Grid container justifyContent="center">
                {rowData.map((valueType, index) => (
                    homeHeader(valueType.type, valueType.number, index)
                ))}
            </Grid>
            {allOrders()}
        </div>

    );
}

export default Home;
