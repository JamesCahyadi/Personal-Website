import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Paper, Grid, Typography } from '@material-ui/core';
import ProjectCard from './ProjectCard';
import PersonalWebsite from '../assets/personalwebsite.png';
import UWZone from '../assets/uwzone.png';
import Wordsearch from '../assets/wordsearch.png';
import PopcornMovies from '../assets/popcornmovies.png';
import DodgeMaster from '../assets/dodgemaster.png';

const useStyles = makeStyles({
    root: {
        padding: 10,
        marginTop: 20,
        marginBottom: 10
    },
    title: {
        marginBottom: 20
    }
});

const Projects = () => {
    const classes = useStyles();
    return (
        <>
            <Paper elevation={1} className={classes.root}>
                <Typography variant='h4' align='center' className={classes.title}>Projects</Typography>
                <Grid container spacing={2}>
                    <ProjectCard
                        image={PersonalWebsite}
                        title='Personal Website'
                        technologies='React, Material-UI'
                        description='This website is a project itself. I look to regularly update this website and improve it throughout my journey.'
                        github='' />
                    <ProjectCard
                        image={UWZone}
                        title='UW Zone'
                        technologies='Flask, PostgreSQL'
                        description='A CRUD application which allows University of Waterloo Students to share experiences about their programs.'
                        github='https://github.com/JamesCahyadi/UW-Zone' />
                    <ProjectCard
                        image={Wordsearch}
                        title='Word Search'
                        technologies='Pygame'
                        description='A classic word search that dynamically generates a board with random words each time.'
                        github='https://github.com/JamesCahyadi/Word-Search' />
                    <ProjectCard
                        image={PopcornMovies}
                        title='Popcorn Movies'
                        technologies='Express, Javascript/HTML/CSS'
                        description='A site that uses several APIs to display information about a collection of movies and TV shows.'
                        github='https://github.com/JamesCahyadi/Popcorn-Movies' />
                    <ProjectCard
                        image={DodgeMaster}
                        title='Dodge Master'
                        technologies='Java Swing'
                        description='An endless dodging game that utilizes OOP. Dodge Master is sure to put dodging skills to the test!'
                        github='https://github.com/JamesCahyadi/Dodge-Master' />
                </Grid>
            </Paper>
        </>
    );
}

export default Projects;