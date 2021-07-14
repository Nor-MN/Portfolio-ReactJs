import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import LogoImg from './../assets/logo2.jpg';
import { Link } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
    },
    nav: {
        background: '#182453',
        position: 'fixed',
    },
    imgNav: {
        height: '100px',
    },
    btn: {
        color: '#ccccce',
        fontWeight: 'bold',
        fontSize: 15,
        letterSpacing: 1,
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
                        <Link to='/'>
                            <img className={classes.imgNav} src={LogoImg} />
                        </Link>
                    </Typography>
                    <Button className={classes.btn}>Perfil</Button>
                    <Button className={classes.btn}>Servicios</Button>
                    <Button className={classes.btn}>Ventajas</Button>
                    {/* <Button variant="outlined" color="inherit">Login</Button> */}
                </Toolbar>
            </AppBar>
        </div>
    );
}