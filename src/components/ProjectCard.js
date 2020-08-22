import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Button from '@material-ui/core/Button';

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
    }
})

const ProjectCard = ({ image, title, technologies, description, github }) => {
    const classes = useStyles();

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
                <CardActions>
                    <Link href={github} underline='none'>
                        <Button size='small' color='primary'>
                            View on Github
                            </Button>
                    </Link>
                </CardActions>
            </Card>
        </Grid>
    );
}

export default ProjectCard;