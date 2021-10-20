import { Card, CardContent, CardHeader, CardMedia } from "@material-ui/core";
import { name, personalDetails } from "./Biography.data";

import ComputerIcon from "@material-ui/icons/Computer";
import EmailIcon from "@material-ui/icons/Email";
import GitHubIcon from "@material-ui/icons/GitHub";
import InfoSnippet from "components/InfoSnippet";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import me from "assets/me.jpg";
import { useStyles } from "./Biography.styles";

const Biography = () => {
  const classes = useStyles();

  const ICON_LOOKUP = {
    school: <SchoolIcon className={classes.icon} />,
    computer: <ComputerIcon className={classes.icon} />,
    email: <EmailIcon className={classes.icon} />,
    github: <GitHubIcon className={classes.icon} />,
    linkedin: <LinkedInIcon className={classes.icon} />,
  };

  return (
    <Card className={classes.root} raised>
      <CardHeader
        titleTypographyProps={{ variant: "h3" }}
        title={name}
        subheaderTypographyProps={{ variant: "subtitle1" }}
      />
      <CardMedia className={classes.img} image={me} title={name} />
      <CardContent>
        {personalDetails.map((detail) => (
          <InfoSnippet url={detail.url} info={detail.description} icon={ICON_LOOKUP[detail.icon]} />
        ))}
      </CardContent>
    </Card>
  );
};

export default Biography;
