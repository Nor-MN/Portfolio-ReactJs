import React from 'react';
import AppBar from '../components/AppBar';
import TitleHeader from '../components/TitleHeader';
import Title from '../components/Title';
import Profile from '../components/Profile';
import Footer from '../components/Footer';
import { makeStyles } from '@material-ui/core/styles';
// import { BrowserRouter as Router, Route } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
    root: {
        background: '#606e8c',
        overflow: 'hidden',
    },
    container: {
        minHeight: '80vh',
    },
}));

function Achi() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <AppBar />
            <div className={classes.container}></div>
            <Footer />
        </div>
    );
}

export default Achi;
