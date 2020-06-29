import React from 'react';
import {makeStyles} from '@material-ui/core/styles'
import isMobile from 'is-mobile';

const drawerWidth = 240;

const useStyles = makeStyles(theme => ({
    content: {
        flexGrow: 1,
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }), 
        paddingTop: 100,
        marginLeft: 0,
      },
      contentShift: {
        padding: theme.spacing(3),
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.easeOut,
          duration: theme.transitions.duration.enteringScreen,
        }),
        paddingTop: 100,
        marginLeft: drawerWidth,
      },
      contentMobile:{
        transition: theme.transitions.create('margin', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }), 
        paddingTop: 70,
        marginLeft: 0,
      }
}));

export default function Container(props){
    const {open = false, children} = props;
    const classes = useStyles();
    let className = open ? classes.contentShift: classes.content
    if(isMobile()){
      className = classes.contentMobile
    }
    return (
        <div className={className}>
            {children}
        </div>
    );
} 