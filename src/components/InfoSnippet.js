import * as constants from "../constants/";

import { GAevent } from "../utils/google-analytics-helpers";
import Link from "@material-ui/core/Link";
import Paper from "@material-ui/core/Paper";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles({
  paper: {
    padding: 2,
  },
});

const InfoSnippet = ({ url, info, icon }) => {
  const classes = useStyles();
  return (
    <Link
      href={url}
      color="textPrimary"
      onClick={() => {
        GAevent(constants.CATEGORIES.PERSONAL_INFO_CARD, constants.ACTIONS.CLICK, info);
      }}
    >
      <Paper elevation={0} className={classes.paper} square>
        {icon}
        {info}
      </Paper>
    </Link>
  );
};

export default InfoSnippet;
