import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    root: {
        padding: 1
    },
    text: {
        fontSize: 1
    }
});

const Course = ({ course, icon }) => {
    const classes = useStyles();

    return (
        <ListItem className={classes.root}>
            <ListItemAvatar>
                <Avatar>
                    {icon}
                </Avatar>
            </ListItemAvatar>
            <ListItemText className={classes.text} secondary={course} />
        </ListItem>
    );
}

export default Course;
