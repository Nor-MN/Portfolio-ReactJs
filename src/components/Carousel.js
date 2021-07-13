import React from 'react';
import Carousel from 'react-material-ui-carousel';
import { Paper, makeStyles, Grid } from '@material-ui/core';
import UserUImg from './../assets/user2.png';
import UserDImg from './../assets/user1.jpg';

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
        padding: 10,
        background: 'none',
        color: 'white',
    },
    name: {
        color: '#FFBD59',
        fontSize: '3em',
    },
    img: {
        width: '80%',
        height: 270,
    },
}));

function Example(props) {
    var items = [
        {
            name: "Ventaja #1",
            description: "Probably the most random thing you have ever seen!",
            url: UserUImg,
        },
        {
            name: "Ventaja #2",
            description: "Hello World!",
            url: UserDImg,
        },
        {
            name: "Ventaja #3",
            description: "Probably the most random thing you have ever seen!",
            url: UserUImg,
        },
        {
            name: "Ventaja #4",
            description: "Hello World!",
            url: UserDImg,
        }
    ]

    return (
        <Carousel>
            {
                items.map((item, i) => <Item key={i} item={item} />)
            }
        </Carousel>
    )
}

function Item(props) {
    const classes = useStyles();
    return (
        <Paper className={classes.paper}>
            <Grid container spacing={3}>
                <Grid item xs={6}>
                    <h2 className={classes.name}>{props.item.name}</h2>
                    <p>{props.item.description}</p>
                </Grid>
                <Grid item xs={6}>
                    <img className={classes.img} src={props.item.url} />

                </Grid>
            </Grid>

        </Paper>
    )
}

export default Example;