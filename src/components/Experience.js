import React, { useState, useEffect } from 'react';
import Course from './Course';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import { makeStyles } from '@material-ui/core/styles';
import { List, Link, Typography, Paper } from '@material-ui/core';
import {
    Timeline,
    TimelineItem,
    TimelineSeparator,
    TimelineConnector,
    TimelineContent,
    TimelineDot
} from '@material-ui/lab';
import LocalCafeIcon from '@material-ui/icons/LocalCafe';
import DesktopWindowsIcon from '@material-ui/icons/DesktopWindows';
import AccountBalanceIcon from '@material-ui/icons/AccountBalance';
import TrendingUpIcon from '@material-ui/icons/TrendingUp';
import FunctionsIcon from '@material-ui/icons/Functions';
import starterhacks from '../assets/starterhacks.png';
import frontrush from '../assets/frontrush.png';
import uwaterloo from '../assets/uwaterloo.png';
import htn from '../assets/htn.png';

const leftTheme = createMuiTheme({
    overrides: {
        MuiTimelineItem: {
            missingOppositeContent: {
                "&:before": {
                    display: "none"
                }
            }
        }
    }
});

const alternateTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: 10,
        textAlign: 'center'
    },
    dot: {
        width: 30,
        height: 30
    },
    title: {
        padding: 10,
        marginTop: 20
    }
}));


const Experience = () => {
    const classes = useStyles();
    const courseSequence = 'https://uwaterloo.ca/computing-financial-management/cfm-course-sequence-fall-2019';
    const starterHacks = 'https://www.starterhacks.ca/';
    const coffeeNCode = 'https://www.facebook.com/UWCoffeeNCode/';
    const frontRush = 'https://www.frontrush.com/web/';
    const openHouse = 'https://uwaterloo.ca/future-students/fall-open-house';
    const hackTheNorth = 'https://hackthenorth.com/';

    const [width, setWidth] = useState(window.innerWidth);
    const [isAboveMed, setIsAboveMed] = useState(false);

    const handleResize = () => {
        setWidth(window.innerWidth);
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize);

        if (width > leftTheme.breakpoints.values.md) {
            setIsAboveMed(true);
        } else {
            setIsAboveMed(false);
        }

        return () => {
            window.removeEventListener('resize', handleResize);
        }
    }, [width]);


    return (
        <ThemeProvider theme={isAboveMed ? alternateTheme : leftTheme}>
            <Typography className={classes.title} variant='h4' align='center'>Experience</Typography>
            <Timeline align={isAboveMed ? 'alternate' : 'left'}>
                <TimelineItem className={classes.timeline}>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={courseSequence}>
                                <img src={uwaterloo} className={classes.dot} alt='logo' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5" align='center'>
                                2A Term
                            </Typography>
                            <Typography variant="caption">
                                Sep - Dec 2020
                            </Typography>
                            <List>
                                <Course course='CS 246 Object-Oriented Software Development' icon={<DesktopWindowsIcon />} />
                                <Course course='CS 245 Logic and Computation' icon={<DesktopWindowsIcon />} />
                                <Course course='CS 241 Foundations of Sequential Programs' icon={<DesktopWindowsIcon />} />
                                <Course course='STAT 230 Probability' icon={<TrendingUpIcon />} />
                                <Course course='AFM 272 Corporate Finance 1' icon={<AccountBalanceIcon />} />
                            </List>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={frontRush}>
                                <img src={frontrush} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                Front Rush
                        </Typography>
                            <Typography variant="caption">
                                May - Aug 2020
                        </Typography>
                            <Typography variant="body2">
                                Built the front-end of the company's website and admin site using <b>JavaScript</b> and <b>HTML/CSS</b>. Wrote <b>SQL</b> queries against database to import data, create custom reports, and complete investigative work into support tickets. Created <b>VBA</b> macros to clean and extract customer data.
                        </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={coffeeNCode} color='textPrimary'>
                                <LocalCafeIcon className={classes.dot} />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                CoffeeNCode Member
                        </Typography>
                            <Typography variant="caption">
                                Feb - Mar 2020
                        </Typography>
                            <Typography variant="body2">
                                Used <b>JavaScript</b> to make bots that compete in a war game!
                        </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={starterHacks}>
                                <img src={starterhacks} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                StarterHacks
                            </Typography>
                            <Typography variant="caption">
                                Jan 2020
                            </Typography>
                            <Typography variant="body2">
                            </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={courseSequence}>
                                <img src={uwaterloo} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5" align='center'>
                                1B Term
                        </Typography>
                            <Typography variant="caption">
                                Jan - Apr 2020
                        </Typography>
                            <List>
                                <Course course='CS 136 Elementary Algorithm Design and Data Abstraction' icon={<DesktopWindowsIcon />} />
                                <Course course='MATH 138 Calculus 2 for Honours Mathematics' icon={<FunctionsIcon />} />
                                <Course course='MATH 136 Linear Algebra for Honours Mathematics' icon={<FunctionsIcon />} />
                                <Course course='AFM 121 Introduction to Global Financial Markets' icon={<AccountBalanceIcon />} />
                                <Course course='AFM 102 Introduction to Managerial Accounting' icon={<AccountBalanceIcon />} />
                            </List>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={openHouse}>
                                <img src={uwaterloo} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                Open House Program Representative
                        </Typography>
                            <Typography variant="caption">
                                Nov 2019
                        </Typography>
                            <Typography variant="body2">
                                Presented information about <b>Computing and Financial Management</b> to parents and future students
                        </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>


                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={coffeeNCode} color='textPrimary'>
                                <LocalCafeIcon className={classes.dot} />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                CoffeeNCode Member
                        </Typography>
                            <Typography variant="caption">
                                Oct - Nov 2019
                        </Typography>
                            <Typography variant="body2">
                                Used <b>Python</b> to make bots that compete in a battlefield game!
                        </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={hackTheNorth}>
                                <img src={htn} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5">
                                Hack the North Volunteer
                        </Typography>
                            <Typography variant="caption">
                                Sep 2019
                        </Typography>
                            <Typography variant="body2">
                                Acted as a logistics volunteer to ensure the hackathon ran smoothly
                        </Typography>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>

                <TimelineItem>
                    <TimelineSeparator>
                        <TimelineDot variant="outlined">
                            <Link href={courseSequence}>
                                <img src={uwaterloo} className={classes.dot} alt='' />
                            </Link>
                        </TimelineDot>
                        <TimelineConnector />
                    </TimelineSeparator>
                    <TimelineContent>
                        <Paper elevation={3} className={classes.paper} >
                            <Typography variant="h5" align='center'>
                                1A Term
                            </Typography>
                            <Typography variant="caption">
                                Sep - Dec 2020
                            </Typography>
                            <List>
                                <Course course='CS 135 Designing Functional Programs' icon={<DesktopWindowsIcon />} />
                                <Course course='MATH 137 Calculus 1 for Honours Mathematics' icon={<FunctionsIcon />} />
                                <Course course='MATH 135 Algebra for Honours Mathematics' icon={<FunctionsIcon />} />
                                <Course course='AFM 101 Introduction to Financial Accounting' icon={<AccountBalanceIcon />} />
                                <Course course='AFM 132 Introduction to Business Stages' icon={<AccountBalanceIcon />} />
                            </List>
                        </Paper>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>
        </ThemeProvider>
    );
}

export default Experience;