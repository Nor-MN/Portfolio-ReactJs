import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        width: '80%',
        position: 'relative',
        marginLeft: '10%',
    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paperName: {
        color: '#182453',
        fontWeight: 'bold',
    },
    paperDescrip: {
        textAlign: 'justify',
    },
}));

export default function Profile() {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <Paper className={classes.paper}>
                <Grid container spacing={3}>
                    <Grid item xs={3} className={classes.paperName}>
                        DESCRIPCIÓN:
                    </Grid>
                    <Grid item xs={9} className={classes.paperDescrip}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                    </Grid>

                    <Grid item xs={3} className={classes.paperName}>
                        DESCRIPCIÓN:
                    </Grid>
                    <Grid item xs={9} className={classes.paperDescrip}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                    </Grid>
                    <Grid item xs={3} className={classes.paperName}>
                        DESCRIPCIÓN:
                    </Grid>
                    <Grid item xs={9} className={classes.paperDescrip}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                    </Grid>
                    <Grid item xs={3} className={classes.paperName}>
                        DESCRIPCIÓN:
                    </Grid>
                    <Grid item xs={9} className={classes.paperDescrip}>
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur atque impedit dolores minus praesentium eaque, aliquid sit numquam optio quasi soluta eligendi ducimus maiores, perferendis quaerat possimus alias sunt consequuntur.
                    </Grid>
                </Grid>
            </Paper>
        </div>
    );
}