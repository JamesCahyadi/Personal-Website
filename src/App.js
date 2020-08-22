import React, { createRef } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';
import Navbar from './components/Navbar';
import ResumeCard from './components/ResumeCard';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Footer from './components/Footer';

const useStyles = makeStyles(theme => ({
  root: {
    paddingBottom: 20,
    backgroundColor: '#f4f4f4'
  },
  scroll: {
    scrollMarginTop: '5rem',
    // [theme.breakpoints.down('sm')]: {
    //   scrollMarginTop: '16vh'
    // }
  }
}));

function App() {
  const classes = useStyles();
  const projectsRef = createRef();
  const experienceRef = createRef();
  const resumeRef = createRef();

  return (
    <>
      <Navbar projectsRef={projectsRef} experienceRef={experienceRef} resumeRef={resumeRef} />
      <Grid container ref={resumeRef} className={classes.scroll} >
        <Grid container>
          <Grid item sm={2} lg={4}>
          </Grid>
          <Grid item xs={12} sm={8} lg={4}>
            <ResumeCard />
          </Grid>
          <Grid item sm={2} lg={4}>
          </Grid>
        </Grid>
      </Grid>
      <br></br>
      <hr></hr>
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
