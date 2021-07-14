import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import TimelineIcon from '@material-ui/icons/Timeline';
import EcoIcon from '@material-ui/icons/Eco';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    link: {
        textDecoration: 'none',
    },
    root: {
        textAlign: 'center',
        textDecoration: 'none',
        marginTop: 30,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fab: {
        background: '#f0f0f0',
        height: 160,
        fontSize: 20,
        width: 200,
        margin: 10,
        color: '#182453',
    },
    extendedIcon: {
        marginRight: theme.spacing(1),
        fontSize: 50,
        color: '#FFBD59'
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Link to='/logro' className={classes.link}>
                <Fab className={classes.fab} variant="extended">
                    <EmojiEventsIcon className={classes.extendedIcon} />
                    Logro
                </Fab>
            </Link>

            <Link to='/logro' className={classes.link}>
                <Fab className={classes.fab} variant="extended">
                    <EcoIcon className={classes.extendedIcon} />
                    Logro
                </Fab>
            </Link>

            <Link to='/logro' className={classes.link}>
                <Fab className={classes.fab} variant="extended">
                    <TimelineIcon className={classes.extendedIcon} />
                    Logro
                </Fab>
            </Link>
        </div>
    );
}
