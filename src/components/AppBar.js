import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        background: '#182453',
    },
    imgNav: {
        height: '100px',
    },
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1,
        color: '#FFBD59',
        fontSize: '14px',
    },
}));

export default function ButtonAppBar() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <AppBar position="static" className={classes.nav}>
                <Toolbar>
                    <Typography variant="h6" className={classes.title}>
                        <img className={classes.imgNav} src="../../assets/logo2.png" />
                    </Typography>
                    <Button color="inherit">Perfil</Button>
                    <Button color="inherit">Servicios</Button>
                    <Button color="inherit">Ventajas</Button>
                    {/* <Button variant="outlined" color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}