import * as subjects from "~/constants/subjects";

import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FunctionsIcon from "@material-ui/icons/Functions";
import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

export const getSubjectIcon = (subject) => {
  switch (subject) {
    case subjects.MATH:
      return <FunctionsIcon />;
    case subjects.COMSCI:
      return <DesktopWindowsIcon />;
    case subjects.STAT:
      return <TrendingUpIcon />;
    case subjects.FINANCE:
      return <AccountBalanceIcon />;
    default:
      return <DesktopWindowsIcon />;
  }
};
