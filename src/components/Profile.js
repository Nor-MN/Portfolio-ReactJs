import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import ProfImg from './../assets/abogado.png';
import LogoImg from './../assets/logo2.png';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        position: 'relative',
        marginLeft: '10%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'justify',
        background: '#182453',
        color: '#ded3d1',
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
        width: '90%',
        height: 350,
        maxHeight: 400,
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container xs={12}>
                    <Grid spacing={3} xs={3}>
                        <img src={ProfImg} className={classes.profImg} />
                    </Grid>
                    <Grid xs={9}>
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