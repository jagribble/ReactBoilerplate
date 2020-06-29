import React from 'react';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import CloseIcon from '@material-ui/icons/Close';
import { Link } from 'react-router-dom';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Switch from '@material-ui/core/Switch';
import Divider from '@material-ui/core/Divider';


import { useThemeContextProvider } from './Providers/Theme';
import { Typography } from '@material-ui/core';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
    },
    drawer: {
        [theme.breakpoints.up('sm')]: {
            width: drawerWidth,
            flexShrink: 0,
        },
    },
    appBar: {
        zIndex: theme.zIndex.drawer + 1,
    },
    menuButton: {
        marginRight: theme.spacing(2),
        [theme.breakpoints.up('sm')]: {
            display: 'none',
        },
    },
    toolbar: theme.mixins.toolbar,
    drawerPaper: {
        width: drawerWidth
    },
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
    },
    closeMenuButton: {
        marginRight: 'auto',
        marginLeft: 0,
    },
    darkModeSwitch: {
        paddingLeft: 16
    },
    payPal: {
        padding: 10,
    }
}));
export default function Navigation(props) {
    const { menuItems = [], open, handleDrawerToggle } = props;
    const theme = useTheme();
    const classes = useStyles();
    const { toggleType, getType } = useThemeContextProvider();
    const drawer = (
        <div>
            <List>
                {menuItems.map((item) => {
                    const renderLink = React.useMemo(
                        () =>
                            React.forwardRef((itemProps, ref) => (
                                <Link {...itemProps} innerRef={ref} />
                            )),
                        [],
                    );
                    return (
                        <ListItem button to={item.path} key={`item_${item.title}`} component={renderLink}>
                            <ListItemText primary={item.title} />
                        </ListItem>
                    );
                })}
            </List>
        </div>
    );
    return (
        <nav className={classes.drawer}>
            {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
            <Hidden smUp>
                <Drawer
                    variant="temporary"
                    anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                    open={open}
                    onClose={handleDrawerToggle}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                    ModalProps={{
                        keepMounted: true, // Better open performance on mobile.
                    }}
                >
                    <IconButton onClick={handleDrawerToggle} className={classes.closeMenuButton}>
                        <CloseIcon />
                    </IconButton>
                    <FormGroup row>
                        <FormControlLabel
                            control={<Switch checked={getType()} className={classes.darkModeSwitch} onChange={() => toggleType()} name="darkMode" />}
                            label="Dark Mode"
                            labelPlacement="start"
                        />
                    </FormGroup>
                    <Divider />

                    {drawer}
                    <Typography variant="caption" className={classes.payPal}>Support me via <a href="https://www.paypal.me/gribbledev/2gbp">Paypal</a></Typography>
                </Drawer>
            </Hidden>
            <Hidden xsDown>
                <Drawer
                    className={classes.drawer}
                    variant="persistent"
                    open={open}
                    classes={{
                        paper: classes.drawerPaper,
                    }}
                >
                    <div className={classes.toolbar} />
                    {drawer}
                    <Typography variant="caption" className={classes.payPal}>Support me via <a href="https://www.paypal.me/gribbledev/2gbp">Paypal</a></Typography>
                </Drawer>
            </Hidden>
        </nav>
    );
}