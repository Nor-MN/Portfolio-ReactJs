import React from 'react';
import AppBar from '../components/AppBar';
import TitleHeader from '../components/TitleHeader';
import Achievements from '../components/Achievement';
import Title from '../components/Title';
import Profile from '../components/Profile';
import Services from '../components/Services';
import Carousel from '../components/Carousel';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#fafbfd',
        overflow: 'hidden',
    },
    container: {
        minHeight: '80vh',
        background: '#000',
    },
    contentDiv: {
        background: '#182453',
        padding: 30,
    },
}));

function Home() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar />
            <TitleHeader />
            <Achievements />
            <Title className={classes.container} text={'Perfil Profesional'} />
            <Profile />
            <Title text={'Servicios'} />
            <Services />
            <Title text={'Ventajas'} />
            <div className={classes.contentDiv}>
                <Carousel />
            </div>
            {/* <NavBar /> */}
            <Footer />
        </div>
    );
}

export default Home;
