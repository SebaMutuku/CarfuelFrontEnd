import {Button, Toolbar, Typography, AppBar, IconButton, Badge} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import MenuIcon from '@material-ui/icons/Menu';
import {AccountBox, AccountCircle, Home, Message, Notifications} from "@material-ui/icons";
import React from "react";
import LoginDialog from "../dialogs/LoginDialog";

export default function Header() {
    const classes = ContainerStyles();
    const [isLoggedIn, setIsLoggedIn] = React.useState(localStorage.getItem("isloggedIn"));
    const today = new Date();
    const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
    const time = today.getHours() + ":" + today.getMinutes();
    const emails = ['username@gmail.com', 'user02@gmail.com'];
    const [selectedValue, setSelectedValue] = React.useState(emails[1]);
    const [open, setOpen] = React.useState(false);
    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = (value) => {
        setOpen(false);
        setSelectedValue(value);
    };

    return (
        <AppBar position="static" style={{
            backgroundColor: "#347899"
        }}>
            <Toolbar>
                    <IconButton
                        edge="start"
                        className={classes.menuButton}
                        color="inherit"
                        aria-label="open drawer">
                        <MenuIcon/>
                    </IconButton>
                    <Typography style={{flexGrow: 1, fontSize: 18, fontWeight: "bold"}}>
                        Dashboard
                    </Typography>
                    <Typography className={classes.appTitle} style={{
                        fontWeight: "bold",
                        fontSize: 18,
                    }}>
                        {date}
                    </Typography>
                    <Typography className={classes.appTitle} style={{
                        fontWeight: "bold",
                        marginLeft: 10,
                        fontSize: 18,
                    }}>
                        {time}
                    </Typography>
                    <Typography className={classes.appTitle} style={{
                        fontWeight: "bold",
                        fontSize: 18,
                        marginLeft: 10
                    }}>
                        Sebastian Mutuku
                    </Typography>
                    <IconButton
                        aria-label="Notification"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Notifications/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="Message"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <Message/>
                        </Badge>
                    </IconButton>
                    <IconButton
                        aria-label="Message"
                        aria-controls="menu-appbar"
                        aria-haspopup="true"
                        color="inherit" onClick={() => handleClickOpen()}>
                        <AccountCircle />
                    </IconButton>
                    <LoginDialog selectedValue={selectedValue} open={open} onClose={handleClose}/>
                </Toolbar>

            {/*//     :*/}
            {/*//     <Toolbar>*/}
            {/*//         <Typography style={{*/}
            {/*//             fontSize: 14,*/}
            {/*//             flexGrow: 1,*/}
            {/*//             fontWeight: "bold",*/}
            {/*//         }}>*/}
            {/*//             Please Login or Register in to proceed*/}
            {/*//         </Typography>*/}
            {/*//         <Typography className={classes.appTitle} style={{*/}
            {/*//             fontWeight: "bold",*/}
            {/*//             fontSize: 14,*/}
            {/*//         }}>*/}
            {/*//             {date}*/}
            {/*//         </Typography>*/}
            {/*//         <Typography className={classes.appTitle} style={{*/}
            {/*//             fontWeight: "bold",*/}
            {/*//             marginLeft: 10,*/}
            {/*//             fontSize: 14,*/}
            {/*//         }}>*/}
            {/*//             {time}*/}
            {/*//         </Typography>*/}
            {/*//     </Toolbar>*/}
            {/*// }*/}
        </AppBar>
    );
}