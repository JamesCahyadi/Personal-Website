import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Grid, Card, CardHeader, CardMedia, Typography, Link, Button, Box } from '@material-ui/core';
import WebIcon from '@material-ui/icons/Web';
import GitHubIcon from '@material-ui/icons/GitHub';


const useStyles = makeStyles({
    card: {
        height: 420,
        textAlign: 'center'
    },
    media: {
        objectFit: 'fill'
    },
    header: {
        paddingTop: 5,
        paddingBottom: 5
    },
    description: {
        paddingLeft: 16,
        paddingRight: 5
    },
    center: {
        textAlign: 'center'
    },
    icon: {
        fontSize: '1.25rem',
        marginBottom: 2,
        marginRight: 3
    }
})

const ProjectCard = ({ image, title, technologies, description, github, website }) => {
    const classes = useStyles();
    let elem;

    if (website) {
        elem =
            <>
                |
                <Link href={website} underline='none'>
                    <Button size='small' color='primary'>
                        <WebIcon className={classes.icon} /> Visit
                    </Button>
                </Link>
            </>
    }

    return (
        <Grid item xs={12} lg={6}>
            <Card className={classes.card}>
                <CardMedia className={classes.media}
                    component='img'
                    alt='Project Image'
                    height='250'
                    image={image}
                    title={title}
                />
                <CardHeader title={title} subheader={technologies} className={classes.header} />
                <Typography variant='body2' className={classes.description}>
                    {description}
                </Typography>
                <Box mt={2}>
                    <Link href={github} underline='none'>
                        <Button size='small' color='primary'>
                            <GitHubIcon className={classes.icon} /> Github
                        </Button>
                    </Link>
                    {elem}
                </Box>
            </Card>
        </Grid>
    );
}

export default ProjectCard;