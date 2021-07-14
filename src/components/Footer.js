import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import BottomNavigation from '@material-ui/core/BottomNavigation';
import BottomNavigationAction from '@material-ui/core/BottomNavigationAction';
import Grid from '@material-ui/core/Grid';
import Form from './FormContact';
import FacebookIcon from '@material-ui/icons/Facebook';
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
const useStyles = makeStyles((theme) => ({
    root: {
        width: '100%',
        height: 'auto',

    },
    gridM: {
        padding: theme.spacing(2),
        textAlign: 'center',
        padding: 10,
        background: 'none',
        color: 'black',
        background: '#e7e7e7',
    },
    icon: {
        border: '1px solid',
        borderRadius: 20,
        margin: 2,
        color: '#FFBD59'
    },
    copyright: {
        background: '#3b3b3b',
        color: '#fafbfd',
    },
}));

export default function SimpleBottomNavigation() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    return (
        <BottomNavigation
            className={classes.root}
        >
            <Grid container spacing={3} className={classes.gridM}>
                <Grid item xs={3}>
                    <h4>DIRECCIÓN</h4>
                    <p>0000 XXXX XXX</p>
                </Grid>
                <Grid item xs={4}>
                    <h4>Redes Sociales</h4>
                    <BottomNavigationAction className={classes.icon} label="Favorites" icon={<FacebookIcon />} />
                    <BottomNavigationAction className={classes.icon} label="Nearby" icon={<InstagramIcon />} />
                    <BottomNavigationAction className={classes.icon} label="Nearby" icon={<TwitterIcon />} />
                </Grid>
                <Grid item xs={5}>
                    <h4>Formulario de Contacto</h4>
                    <Form />
                </Grid>
                <Grid item xs={12} className={classes.copyright}>
                    <h4>Copyright © Your Website 2021</h4>
                </Grid>
            </Grid>

        </BottomNavigation>
    );
}
