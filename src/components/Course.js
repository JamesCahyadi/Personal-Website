import Avatar from "@material-ui/core/Avatar";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import ListItemText from "@material-ui/core/ListItemText";
import React from "react";
import { getSubjectIcon } from "utils/getSubjectIcon";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  root: {
    padding: 1,
  },
  text: {
    fontSize: 1,
  },
});

const Course = ({ course }) => {
  const classes = useStyles();

  console.log("course", course);
  return (
    <ListItem className={classes.root}>
      <ListItemAvatar>
        <Avatar>{getSubjectIcon(course)}</Avatar>
      </ListItemAvatar>
      <ListItemText className={classes.text} secondary={course} />
    </ListItem>
  );
};

export default Course;
