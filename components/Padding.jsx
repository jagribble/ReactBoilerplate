import React from 'react';
import makeStyles from '@material-ui/core/styles/makeStyles';
const useStyles = makeStyles({
    small: {
        padding: 10,
    },
    medium: {
        padding: 20,
    },
    large: {
        padding: 30,
    }
})
export default function Padding(props){
    const { small = false, medium = false, large = false} = props;
    const classes = useStyles();
    if (small) {
        return <div className={classes.small} />;
    }
    if (medium) {
        return <div className={classes.medium} />;
    }
    if (large) {
        return <div className={classes.large} />;
    }
    return <div className={classes.small} />;
}