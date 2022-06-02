import AccountBalanceIcon from "@material-ui/icons/AccountBalance";
import AudiotrackIcon from "@material-ui/icons/Audiotrack";
import BusinessCenterIcon from "@material-ui/icons/BusinessCenter";
import { COURSE_CODES } from "constants/courseCodes";
import DesktopWindowsIcon from "@material-ui/icons/DesktopWindows";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import FunctionsIcon from "@material-ui/icons/Functions";
import LocalHospitalIcon from "@material-ui/icons/LocalHospital";
import MenuBookIcon from "@material-ui/icons/MenuBook";
import React from "react";
import RecordVoiceOverIcon from "@material-ui/icons/RecordVoiceOver";
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
    case COURSE_CODES.ENGLISH:
      return <MenuBookIcon />;
    case COURSE_CODES.COMMUNICATION:
      return <RecordVoiceOverIcon />;
    case COURSE_CODES.HEALTH:
    case COURSE_CODES.SCIENCE:
      return <LocalHospitalIcon />;
    case COURSE_CODES.ENTREPRENEURSHIP:
    case COURSE_CODES.COMMERCE:
      return <BusinessCenterIcon />;
    case COURSE_CODES.MUSIC:
      return <AudiotrackIcon />;
    case COURSE_CODES.CLASSICAL:
      return <FlashOnIcon />;
    default:
      return <DesktopWindowsIcon />;
  }
};
