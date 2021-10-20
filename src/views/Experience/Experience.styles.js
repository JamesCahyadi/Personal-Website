import { createMuiTheme, makeStyles } from "@material-ui/core/styles";

export const leftTheme = createMuiTheme({
  overrides: {
    MuiTimelineItem: {
      missingOppositeContent: {
        "&:before": {
          display: "none",
        },
      },
    },
  },
});

export const alternateTheme = createMuiTheme({});

export const useStyles = makeStyles(() => ({
  title: {
    padding: 10,
    marginTop: 20,
  },
}));
