import React from 'react';
import makeStyles from '@material-ui/styles/makeStyles';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';


const useStyles = makeStyles({
    card: {
        margin: 10,
        padding: 10,
    },
    cardMobile: {
        margin: 5,
        padding: 10,
    },
    bg: {
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        willChange: 'opacity',
    },
    trailsMain: {
        position: 'relative',
        height: '100%',
        overflow: 'hidden',
        cursor: 'pointer',
        display: 'flex',
        margin: 40,
        alignItems: 'center',
        fontSize: 'smaller',
    },
    latestBlogPost: {
        position: 'relative',
        marginTop: 75,
        padding: 10
    },
});

const slides = [
    { id: 0, url: '/progressive/image/home.jpg' },
    { id: 1, url: '/progressive/image/stage.jpg' },
    { id: 2, url: '/progressive/image/drone.png' },
]

const items = ['Jules', 'Gribble']
const titleConfig = { mass: 5, tension: 2000, friction: 500 }

export default function Home(props) {
    const classes = useStyles();
  
    
    
    return (
        <Grid container>
           
            
            <Grid item xs={12} sm={6}>
                <Card className={classes.latestBlogPost}>
                    <Typography variant="h5">React Booilerplate</Typography>
                   
                </Card>
            </Grid>
        </Grid>
    );
}