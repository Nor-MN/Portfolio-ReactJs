import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
    root: {
        itemAlign: 'center',
        justifyContent: 'center',

        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    btn: {
        width: 'auto',
        height: 50,
        borderRadius: 20,
        borderEndEndRadius: 60,
        borderTopRightRadius: 60,
    }
}));

export default function BasicTextFields() {
    const classes = useStyles();

    return (
        <form className={classes.root} noValidate autoComplete="off">
            <TextField label="Correo" />
            <TextField label="Mensaje" />
            <Button className={classes.btn} variant="contained" color="primary" disableElevation>
                Enviar  <SendIcon />
            </Button>
        </form>
    );
}
