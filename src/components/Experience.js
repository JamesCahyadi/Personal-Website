import { Link, List, Paper, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";
import { Timeline, TimelineConnector, TimelineContent, TimelineDot, TimelineItem, TimelineSeparator } from "@material-ui/lab";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import Course from "./Course";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FunctionsIcon from "@material-ui/icons/Functions";
import LocalCafeIcon from "@material-ui/icons/LocalCafe";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";
import frontrush from "../assets/frontrush.png";
import geotab from "../assets/geotab.png";
import htn from "../assets/htn.png";
import { makeStyles } from "@material-ui/core/styles";
import starterhacks from "../assets/starterhacks.png";
import uwaterloo from "../assets/uwaterloo.png";

const leftTheme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
    },
  },
});

const alternateTheme = createMuiTheme({});

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: 10,
    textAlign: "center",
  },
  dot: {
    width: 30,
    height: 30,
  },
  title: {
    padding: 10,
    marginTop: 20,
  },
  techPlus: {
    borderRadius: 15,
    marginTop: 1,
  },
  geotab: {
    borderRadius: 15,
  },
}));

const Experience = () => {
  const classes = useStyles();
  const courseSequence = "https://uwaterloo.ca/computing-financial-management/cfm-course-sequence-fall-2019";
  const starterHacks = "https://www.starterhacks.ca/";
  const coffeeNCode = "https://www.facebook.com/UWCoffeeNCode/";
  const frontRush = "https://www.frontrush.com/web/";
  const openHouse = "https://uwaterloo.ca/future-students/fall-open-house";
  const hackTheNorth = "https://hackthenorth.com/";
  const techPlusImg =
    "https://scontent.fyzd1-3.fna.fbcdn.net/v/t1.6435-9/118691970_322838245798185_2304496919210938243_n.jpg?_nc_cat=103&ccb=1-3&_nc_sid=09cbfe&_nc_ohc=v2zocZrPQ8gAX-VMUQX&_nc_ht=scontent.fyzd1-3.fna&oh=4b430e7177e83af3969936c12c89549e&oe=6096EC1A";
  const techPlus = "https://www.techplusuw.org/";
  const geotabLink = "https://www.geotab.com/";
  const deltaHacksLink = "https://www.deltahacks.com/";
  const deltaHacksImg = "https://www.deltahacks.com/img/logolarge.b68d4072.png";

  const [width, setWidth] = useState(window.innerWidth);
  const [isAboveMed, setIsAboveMed] = useState(false);

  const handleResize = () => {
    setWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    if (width > leftTheme.breakpoints.values.md) {
      setIsAboveMed(true);
    } else {
      setIsAboveMed(false);
    }

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  return (
    <ThemeProvider theme={isAboveMed ? alternateTheme : leftTheme}>
      <Typography className={classes.title} variant="h4" align="center">
        Experience
      </Typography>
      <Timeline align={isAboveMed ? "alternate" : "left"}>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={courseSequence}>
                <img src={uwaterloo} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" align="center">
                2B Term
              </Typography>
              <Typography variant="caption">May - Aug 2021</Typography>
              <List>
                <Course course="CS 240 Data Structures and Data Management" icon={<DesktopWindowsIcon />} />
                <Course course="CS 251 Computer Organization and Design" icon={<DesktopWindowsIcon />} />
                <Course course="MATH 239 Introduction to Combinatorics" icon={<FunctionsIcon />} />
                <Course course="STAT 231 Statistics" icon={<TrendingUpIcon />} />
                <Course course="AFM 372 Corporate Finance 2" icon={<AccountBalanceIcon />} />
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.timeline}>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={deltaHacksLink}>
                <img src={deltaHacksImg} className={classes.dot} alt="logo" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">DeltaHacks 7</Typography>
              <Typography variant="caption">Mar 2021</Typography>
              <Typography variant="body2">
                Trained machine learning models using <b>Tensorflow.js</b> to translate sign language into subtitles during video calls. Incorporated event-based and spontaneous communication among
                users by utilizing <b>Socket.io</b> and <b>WebRTC</b>.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.timeline}>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={geotabLink}>
                <img src={geotab} className={`${classes.geotab} ${classes.dot}`} alt="logo" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">Geotab</Typography>
              <Typography variant="caption">Jan - Apr 2021</Typography>
              <Typography variant="body2">
                Developed map visualization software using <b>Plolty</b> and <b>Mapbox</b> to allow traffic engineers to analyze navigation routes. Implemented frontend <b>caching</b> to optimize the
                software's performance and reduce backend load by over 60%
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.timeline}>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={techPlus}>
                <img src={techPlusImg} className={`${classes.dot} ${classes.techPlus}`} alt="logo" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">Tech+ UW</Typography>
              <Typography variant="caption">Jan - Apr 2021</Typography>
              <Typography variant="body2">
                Developed organization's landing page and portal while strictly adhering to <b>React's atomic design principles</b>. Implemented user authentication and authorization flow for mentors
                and mentees using <b>Auth0</b>.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem className={classes.timeline}>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={courseSequence}>
                <img src={uwaterloo} className={classes.dot} alt="logo" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" align="center">
                2A Term
              </Typography>
              <Typography variant="caption">Sep - Dec 2020</Typography>
              <List>
                <Course course="CS 246 Object-Oriented Software Development" icon={<DesktopWindowsIcon />} />
                <Course course="CS 245 Logic and Computation" icon={<DesktopWindowsIcon />} />
                <Course course="CS 241 Foundations of Sequential Programs" icon={<DesktopWindowsIcon />} />
                <Course course="STAT 230 Probability" icon={<TrendingUpIcon />} />
                <Course course="AFM 272 Corporate Finance 1" icon={<AccountBalanceIcon />} />
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={frontRush}>
                <img src={frontrush} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">Front Rush</Typography>
              <Typography variant="caption">May - Aug 2020</Typography>
              <Typography variant="body2">
                Built front-end of the company's website and admin site using <b>JavaScript</b> and <b>HTML/CSS</b>. Wrote <b>SQL</b> queries against database to import data and complete investigative
                work into support tickets. Created <b>VBA</b> macros to clean and extract customer data.
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={coffeeNCode} color="textPrimary">
                <LocalCafeIcon className={classes.dot} />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">CoffeeNCode Member</Typography>
              <Typography variant="caption">Feb - Mar 2020</Typography>
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
                <img src={starterhacks} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">StarterHacks</Typography>
              <Typography variant="caption">Jan 2020</Typography>
              <Typography variant="body2"></Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={courseSequence}>
                <img src={uwaterloo} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" align="center">
                1B Term
              </Typography>
              <Typography variant="caption">Jan - Apr 2020</Typography>
              <List>
                <Course course="CS 136 Elementary Algorithm Design and Data Abstraction" icon={<DesktopWindowsIcon />} />
                <Course course="MATH 138 Calculus 2 for Honours Mathematics" icon={<FunctionsIcon />} />
                <Course course="MATH 136 Linear Algebra for Honours Mathematics" icon={<FunctionsIcon />} />
                <Course course="AFM 121 Introduction to Global Financial Markets" icon={<AccountBalanceIcon />} />
                <Course course="AFM 102 Introduction to Managerial Accounting" icon={<AccountBalanceIcon />} />
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={openHouse}>
                <img src={uwaterloo} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">Open House Program Representative</Typography>
              <Typography variant="caption">Nov 2019</Typography>
              <Typography variant="body2">
                Presented information about <b>Computing and Financial Management</b> to parents and future students
              </Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={coffeeNCode} color="textPrimary">
                <LocalCafeIcon className={classes.dot} />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">CoffeeNCode Member</Typography>
              <Typography variant="caption">Oct - Nov 2019</Typography>
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
                <img src={htn} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5">Hack the North Volunteer</Typography>
              <Typography variant="caption">Sep 2019</Typography>
              <Typography variant="body2">Acted as a logistics volunteer to ensure the hackathon ran smoothly</Typography>
            </Paper>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined">
              <Link href={courseSequence}>
                <img src={uwaterloo} className={classes.dot} alt="" />
              </Link>
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent>
            <Paper elevation={3} className={classes.paper}>
              <Typography variant="h5" align="center">
                1A Term
              </Typography>
              <Typography variant="caption">Sep - Dec 2020</Typography>
              <List>
                <Course course="CS 135 Designing Functional Programs" icon={<DesktopWindowsIcon />} />
                <Course course="MATH 137 Calculus 1 for Honours Mathematics" icon={<FunctionsIcon />} />
                <Course course="MATH 135 Algebra for Honours Mathematics" icon={<FunctionsIcon />} />
                <Course course="AFM 101 Introduction to Financial Accounting" icon={<AccountBalanceIcon />} />
                <Course course="AFM 132 Introduction to Business Stages" icon={<AccountBalanceIcon />} />
              </List>
            </Paper>
          </TimelineContent>
        </TimelineItem>
      </Timeline>
    </ThemeProvider>
  );
};

export default Experience;
