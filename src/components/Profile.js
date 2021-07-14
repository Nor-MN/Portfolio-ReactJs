import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfImg from './../assets/abogado.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        position: 'relative',
        marginLeft: '10%',
        ['@media(max-width: 780px)']: {
            width: '100%',
            margin: 0,
        },
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        background: '#182453',
        color: '#ded3d1',
        paddingTop: 40,
        paddingBottom: 40,
        ['@media(max-width: 480px)']: {
            fontSize: 12,
        },
    },
    paperName: {
        color: '#FFBD59',
        fontWeight: 'bold',

    },
    paperDescrip: {
        padding: 2,
        textAlign: 'justify',
    },
    profImg: {
        width: '100%',
        height: '100%',
        maxHeight: 400
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container xs={12} spacing={3}>
                    <Grid item xs>
                        <img src={ProfImg} className={classes.profImg} />
                    </Grid>
                    <Grid xs>
                        <Grid item xs={12} className={classes.paperName}>
                            DESCRIPCIÓN:
                        </Grid>
                        <Grid item xs={12} className={classes.paperDescrip}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                        </Grid>

                        <Grid item xs={12} className={classes.paperName}>
                            DESCRIPCIÓN:
                        </Grid>
                        <Grid item xs={12} className={classes.paperDescrip}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                        </Grid>
                        <Grid item xs={12} className={classes.paperName}>
                            DESCRIPCIÓN:
                        </Grid>
                        <Grid item xs={12} className={classes.paperDescrip}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                        </Grid>
                        <Grid item xs={12} className={classes.paperName}>
                            DESCRIPCIÓN:
                        </Grid>
                        <Grid item xs={12} className={classes.paperDescrip}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}