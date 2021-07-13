import React from 'react';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    divider: {
        textAlign: 'center',
        position: 'flex',
        overflow: 'hidden',
        alignItems: 'center',
        color: '#3b6363',
        height: '2em',
        lineHeight: '2em',
    },
}));

export default function Title({ text }) {
    const classes = useStyles();

    return (
        <>
            <h1 className={classes.divider}>{text}</h1>
        </>
    );
}