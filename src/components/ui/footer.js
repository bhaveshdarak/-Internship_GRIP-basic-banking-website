import React from 'react'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { makeStyles, Link } from '@material-ui/core';


const useStyles = makeStyles(theme => ({
    footer: {
        background: "#d4d9ec",
        top: "auto",
        bottom: "0px",
    },
    center: {
        margin: "0 auto"
    },
}))

export default function StickyFooter() {
    const classes = useStyles();

    return (
        <div>
            <AppBar className={classes.footer}>
                <Toolbar className={classes.center} >
                    <div>
                        <Typography variant="body2" style={{ color: 'black', textAlign: 'center' }}>
                            Project Made By Bhavesh Darak
                        </Typography>
                        <Typography variant="body2" style={{ color: 'black', textAlign: 'center' }}>
                            {'Copyright © '}
                            <Link color="inherit">
                                Bhavesh 
                            </Link>{' '}
                            {new Date().getFullYear()}
                            {'.'}
                        </Typography>
                    </div>
                </Toolbar>
            </AppBar>
        </div>
    )
}