import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { AppBar, Toolbar, Avatar, Button, IconButton } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
    appBarStyles: {
        position: 'sticky',
        color: 'primary',
        marginBottom: 20
    },
    avatarStyles: {
        height: 45,
        width: 45
    }
}));

const Navbar = ({ projectsRef, experienceRef, resumeRef }) => {
    const classes = useStyles();

    return (
        <>
            <AppBar className={classes.appBarStyles}>
                <Toolbar>
                    <IconButton onClick={() => resumeRef.current.scrollIntoView({ behavior: 'smooth' })}>
                        <Avatar>JC</Avatar>
                    </IconButton>
                    <Button color="inherit" onClick={() => experienceRef.current.scrollIntoView({ behavior: 'smooth' })} > Experience</Button>
                    <Button color="inherit" onClick={() => projectsRef.current.scrollIntoView({ behavior: 'smooth' })}>Projects</Button>
                </Toolbar>
            </AppBar>
        </>
    );
}


export default Navbar;