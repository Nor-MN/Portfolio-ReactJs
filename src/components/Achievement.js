import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import EditIcon from '@material-ui/icons/Edit';
import FavoriteIcon from '@material-ui/icons/Favorite';
import NavigationIcon from '@material-ui/icons/Navigation';

const useStyles = makeStyles((theme) => ({
    root: {
        textAlign: 'center',
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
        fontSize: 40,
        color: '#FFBD59'
    },
}));

export default function FloatingActionButtons() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Fab className={classes.fab} variant="extended">
                <NavigationIcon className={classes.extendedIcon} />
                Logro
            </Fab>
            <Fab className={classes.fab} variant="extended">
                <NavigationIcon className={classes.extendedIcon} />
                Logro
            </Fab>
            <Fab className={classes.fab} variant="extended">
                <NavigationIcon className={classes.extendedIcon} />
                Logro
            </Fab>
        </div>
    );
}
