import React, { createRef, useEffect } from "react";

import Experience from "./components/Experience";
import Footer from "./components/Footer";
import { Grid } from "@material-ui/core";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import ReactGA from "react-ga";
import ResumeCard from "./components/ResumeCard";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    paddingBottom: 20,
    backgroundColor: "#f4f4f4",
  },
  scroll: {
    scrollMarginTop: "75px",
    [theme.breakpoints.down("xs")]: {
      scrollMarginTop: 0,
    },
  },
}));

function App() {
  const classes = useStyles();
  const projectsRef = createRef();
  const experienceRef = createRef();
  const resumeRef = createRef();

  useEffect(() => {
    ReactGA.initialize("UA-194306998-1");
    console.log("init ga!!!");
    ReactGA.pageview(window.location.pathname + window.location.search);
  }, []);

  return (
    <>
      <Navbar projectsRef={projectsRef} experienceRef={experienceRef} resumeRef={resumeRef} />
      <Grid container ref={resumeRef} className={classes.scroll}>
        <Grid container>
          <Grid item sm={2} lg={4}></Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <ResumeCard />
          </Grid>
          <Grid item sm={2} lg={4}></Grid>
        </Grid>
      </Grid>
      <Grid container ref={experienceRef} className={classes.scroll}>
        <Grid item lg={2} />
        <Grid item xs={12} lg>
          <Experience />
        </Grid>
        <Grid item lg={2} />
      </Grid>

      <Grid container ref={projectsRef} className={classes.scroll}>
        <Grid item sm={2} md={3} />
        <Grid item xs sm md>
          <Projects />
        </Grid>
        <Grid item sm={2} md={3} />
      </Grid>

      <Grid container>
        <Grid item xs={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default App;
