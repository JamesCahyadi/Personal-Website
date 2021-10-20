import * as EVENTS from "constants/googleAnalytics";

import { GAevent } from "utils/googleAnalyticsHelpers";
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
        GAevent(EVENTS.CATEGORIES.PERSONAL_INFO_CARD, EVENTS.ACTIONS.CLICK, info);
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
