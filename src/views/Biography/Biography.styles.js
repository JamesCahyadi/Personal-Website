import { makeStyles } from "@material-ui/core/styles";

export const useStyles = makeStyles({
  root: {
    paddingLeft: 10,
    paddingRight: 10,
    textAlign: "center",
  },
  img: {
    boxSizing: "border-box",
    height: 450,
    width: "100%",
    borderRadius: 4,
    padding: 5,
    backgroundSize: "cover",
  },
  icon: {
    display: "inline-block",
    marginBottom: -5,
    marginRight: 5,
  },
  paper: {
    padding: 5,
  },
});
