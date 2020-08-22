import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import { indigo } from '@material-ui/core/colors';

const useStyles = makeStyles((theme) => ({
    appBarStyles: {
        position: 'sticky',
        color: 'primary',
        marginBottom: 20
    },
    avatarStyles: {
        height: 45,
        width: 45
    },
    btn: {
        marginLeft: 0
    },
    indigo: {
        color: theme.palette.getContrastText(indigo[500]),
        backgroundColor: indigo[500]
    }
}));

const Navbar = ({ projectsRef, experienceRef, resumeRef }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBarStyles}>
                <Toolbar>
                    <IconButton onClick={() => resumeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <Avatar className={classes.indigo}>JC</Avatar>
                    </IconButton>
                    <Button color="inherit" className={classes.btn} onClick={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })} > Experience</Button>
                    <Button color="inherit" onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;