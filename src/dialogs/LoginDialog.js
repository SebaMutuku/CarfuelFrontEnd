import {Dialog, DialogTitle, List, ListItem, ListItemAvatar, Avatar, ListItemText} from "@material-ui/core";
import ContainerStyles from "../css/ContainerStyles";
import React from "react";
import PropTypes from "prop-types";
import {AccountBox, ExitToApp, MessageSharp, Settings} from "@material-ui/icons";

const LoginDialog = (props) => {
    const classes = ContainerStyles();
    const {onClose, selectedValue, open} = props;
    const [isOpen, setIsOpen] = React.useState(open);

    const handleClose = () => {
        onClose(selectedValue);
    };

    const handleListItemClick = (value) => {
        console.log(value)
        onClose(value);
    };
    return (
        <Dialog onClose={handleClose} open={open} classes={{
            paper: classes.dialog
        }}>
            <DialogTitle title="User Settings">User Settings</DialogTitle>
            <List>
                <ListItem autoFocus button onClick={() => handleListItemClick("Settings")}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <Settings/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Settings"/>
                </ListItem>
                <ListItem autoFocus button onClick={() => handleListItemClick("Profile")}>
                    <ListItemAvatar>
                        <Avatar className={classes.avatar}>
                            <AccountBox/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Profile"/>
                </ListItem>
                <ListItem autoFocus button onClick={() => {
                    localStorage.clear();
                    onClose(selectedValue);
                }}>
                    <ListItemAvatar>
                        <Avatar>
                            <ExitToApp/>
                        </Avatar>
                    </ListItemAvatar>
                    <ListItemText primary="Logout"/>
                </ListItem>
            </List>
        </Dialog>)
}
LoginDialog.propTypes = {
    onClose: PropTypes.func.isRequired,
    open: PropTypes.bool.isRequired,
    selectedValue: PropTypes.string.isRequired,
};
export default LoginDialog;