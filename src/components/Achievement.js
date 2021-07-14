import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import EmojiEventsIcon from '@material-ui/icons/EmojiEvents';
import TimelineIcon from '@material-ui/icons/Timeline';
import EcoIcon from '@material-ui/icons/Eco';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
        margin: 30,
        '& > *': {
            margin: theme.spacing(1),
        },
    },
    fab: {
        background: 'white',
        height: 160,
        width: 200,
        fontSize: 20,
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
            <Fab className={classes.fab} variant="extended">
                <EmojiEventsIcon className={classes.extendedIcon} />
                Logro
            </Fab>
            <Fab className={classes.fab} variant="extended">
                <EcoIcon className={classes.extendedIcon} />
                Logro
            </Fab>
            <Fab className={classes.fab} variant="extended">
                <TimelineIcon className={classes.extendedIcon} />
                Logro
            </Fab>
        </div>
    );
}
