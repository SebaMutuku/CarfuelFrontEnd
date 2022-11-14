import {makeStyles} from "@material-ui/core";
import {blue} from "@material-ui/core/colors";

const ContainerStyles = makeStyles((theme) => ({
    //APP bar CSS
    appBarMenu: {
        marginRight: theme.spacing(2),
    },
    appTitle: {
        display: 'none',
        [theme.breakpoints.up('sm')]: {
            display: 'block',
            fontWeight: "headers"
        },

    },
    flexgrow: {
        flexGrow: 1
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    accountButton: {
        marginLeft: theme.spacing(5),
        justifyContent: "flex-end"
    },
    headerContent: {
        marginLeft: theme.spacing(100),

    },
    appCard: {
        justifyContent: "center",
        alignItems: "center"
    },
    avatar: {
        backgroundColor: blue[100],
        color: blue[600],
    },
    dialog: {
        minWidth: 300,
        borderRadius: 20
    },
    //Login MATERIAL CSS
    loginUsername: {
        height: 45,
        width: "100%",
    },
    loginCardTitle: {
        fontWeight: "bold",
        fontSize: 60,
        justifyContent: "center",
        alignContent: "center"
    },
    headers: {
        justifyContent: "center",
        alignItems: "center",
        alignContent: "center",
        fontWeight: "bold",
        fontSize: 20,
    },
    //General Card
    loginPaper: {
        height: 500,
        width: 500,
        justifyContent: "center",
        alignContent: "center",
        // backgroundColor: "#5B5C60",
        flexGrow: 1,

    },
    title: {
        fontSize: 14,
        fontWeight: "bold"
    },
    button: {
        height: 50,
        backgroundColor: "#347899",
        marginTop: 50,
    },
    buttonText: {
        color: "white",
        fontSize: 15,
        fontWeight: "bold"
    },
    //Footer
    footer: {
        margin: 0,
        backgroundColor: "#F5F7F9",
        height: "auto"
    }, divider: {
        fontSize: 20,
        fontWeight: "bold",
        marginTop: 20
    },
    footerPaper: {
        height: "auto",
        marginTop: 5,
        backgroundColor: "#AEDDF7"
    },
    homeCard: {
        height: 150,
        margin: theme.spacing(1),
        marginLeft: 20,
        marginBottom: 20,
        borderRadius: 10
    },

    //Home
    control: {
        padding: theme.spacing(2),
    },
    root: {
        flexGrow: 1,
        marginTop: 20
    },
    allOrders: {
        marginTop: 20,
        borderRadius: 10,
        minHeight: 500,
        backgroundColor: "#F6FAF9"
    }
}));
// const Colors = {
//     appBar: "#9DBAE5"
// }
export default ContainerStyles
