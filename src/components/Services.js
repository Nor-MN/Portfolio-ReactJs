import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Modal from '@material-ui/core/Modal';
import Button from '@material-ui/core/Button';
function rand() {
    return Math.round(Math.random() * 20) - 10;
}

function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();

    return {
        top: `${top}%`,
        left: `${left}%`,
        transform: `translate(-${top}%, -${left}%)`,
    };
}

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        marginBottom: 40,
    },
    image: {
        height: 200,
        width: 300,
        '&:hover': {
            cursor: 'pointer',
        },
    },
    control: {
        padding: theme.spacing(2),
    },
    paper: {
        position: 'absolute',
        width: '70%',
        height: 400,
        backgroundColor: theme.palette.background.paper,
        textAlign: 'center',
        border: 'none',
        padding: theme.spacing(2, 4, 3),
    },
}));

export default function Services() {
    const classes = useStyles();

    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);

    const handleOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    const body = (
        <div style={modalStyle} className={classes.paper}>
            <h2 id="simple-modal-title">Servicio</h2>
            <img className={classes.image} src="../../assets/user1.jpg" />
            <p id="simple-modal-description">
                Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
            </p>
            <Button variant="contained" color="primary" onClick={handleClose}>
                Cerrar
            </Button>
        </div>
    );

    return (
        <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12}>
                <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="simple-modal-title"
                    aria-describedby="simple-modal-description"
                >
                    {body}
                </Modal>
                <Grid container justifyContent="center" spacing={2}>
                    {/* {[0, 1, 2, 3].map((value) => ( */}
                    <Grid item>
                        <img onClick={handleOpen} className={classes.image} src="../../assets/user1.jpg"></img>
                    </Grid>
                    <Grid item>
                        <img onClick={handleOpen} className={classes.image} src="../../assets/user1.jpg"></img>
                    </Grid>
                    <Grid item>
                        <img onClick={handleOpen} className={classes.image} src="../../assets/user1.jpg"></img>
                    </Grid>
                    <Grid item>
                        <img onClick={handleOpen} className={classes.image} src="../../assets/user1.jpg"></img>
                    </Grid>
                    {/* ))} */}
                </Grid>
            </Grid>
        </Grid>
    );
}
