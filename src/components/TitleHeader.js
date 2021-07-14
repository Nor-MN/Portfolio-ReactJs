import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { IconButton, Collapse } from '@material-ui/core';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import background from './../assets/abogado3.jpg';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '80vh',
        backgroundImage: `url(${background})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
    },
    colorText: {
        color: '#FFBD59',
        fontWeight: '500',
    },
    container: {
        textAlign: 'center',
    },
    title: {
        color: '#182453',
        fontWeight: '200',
        background: '#fafbfd25',
        fontSize: '4.5rem',
    },
    btnDown: {
        border: '2px solid',
    },
    goDown: {
        color: '#FFBD59',
        fontSize: '4rem',
    },
}));

function TitleHeader() {
    const classes = useStyles();
    const [checked, setChecked] = useState(false);
    useEffect(() => {
        setChecked(true);
    }, []);
    return (
        <div className={classes.root}>
            <Collapse
                in={checked}
                {...(checked ? { timeout: 1000 } : {})}
                collapsedHeight={50}
            >
                <div className={classes.container}>
                    <h1 className={classes.title}>
                        Legal <br />
                        Corporativo<span className={classes.colorText}>SDávila.</span>
                    </h1>
                    {/* <Scroll to="place-to-visit" smooth={true}> */}
                    <IconButton className={classes.btnDown}>
                        <ExpandMoreIcon className={classes.goDown} />
                    </IconButton>
                    {/* </Scroll> */}
                </div>
            </Collapse>
        </div>
    );
}

export default TitleHeader;