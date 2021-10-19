import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import { COURSE_CODES } from "constants/courseCodes";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FunctionsIcon from "@material-ui/icons/Functions";
import React from "react";
import TrendingUpIcon from "@material-ui/icons/TrendingUp";

const getCourseCode = (word) => word.split(" ")[0];

export const getSubjectIcon = (subject) => {
  switch (getCourseCode(subject)) {
    case COURSE_CODES.MATH:
      return <FunctionsIcon />;
    case COURSE_CODES.COMSCI:
      return <DesktopWindowsIcon />;
    case COURSE_CODES.STAT:
      return <TrendingUpIcon />;
    case COURSE_CODES.FINANCE:
      return <AccountBalanceIcon />;
    default:
      return <DesktopWindowsIcon />;
  }
};