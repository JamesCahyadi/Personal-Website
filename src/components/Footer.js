import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Link, Typography, Box } from '@material-ui/core';
import EmailIcon from '@material-ui/icons/Email';
import GitHubIcon from '@material-ui/icons/GitHub';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import FacebookIcon from '@material-ui/icons/Facebook';

const useStyles = makeStyles({
    root: {
        backgroundColor: 'black',
        padding: 15,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center'
    },
    text: {
        color: 'white'
    },
    icon: {
        display: 'inline-block',
        marginBottom: -5,
        marginLeft: 20,
        marginRight: 20,
        color: 'white'
    }
});

const Footer = () => {
    const classes = useStyles();
    return (
        <Paper className={classes.root} square>
            <Box>
                <Link href='https://github.com/JamesCahyadi'>
                    <GitHubIcon className={classes.icon} />
                </Link>
                <Link href='mailto:jcahyadi@uwaterloo.ca'>
                    <EmailIcon className={classes.icon} />
                </Link>
                <Link href='https://www.linkedin.com/in/james-cahyadi-686673155/?originalSubdomain=ca'>
                    <LinkedInIcon className={classes.icon} />
                </Link>
                <Link href='https://www.facebook.com/james.cahyadi.71'>
                    <FacebookIcon className={classes.icon} />
                </Link>
            </Box>
            <Box>
                <Typography variant='caption' className={classes.text}>
                    Made by James Cahyadi ©
            </Typography>
            </Box>
        </Paper>
    );
}

export default Footer;