import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    paper: {
        padding: 2,
    }
});


const InfoSnippet = ({ url, info, icon }) => {
    const classes = useStyles();
    return (
        <Link href={url} color='textPrimary'>
            <Paper elevation={0} className={classes.paper} square>
                {icon}{info}
            </Paper>
        </Link>
    );
}

export default InfoSnippet;