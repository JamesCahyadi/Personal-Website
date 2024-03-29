import { getCurrentSchoolTerm } from "utils/getCurrentSchoolTerm";

export const name = "James Cahyadi";
export const personalDetails = [
  {
    url: "https://uwaterloo.ca/",
    description: "University of Waterloo",
    icon: "school",
  },
  {
    url: "https://uwaterloo.ca/future-students/programs/computer-science",
    description: `${getCurrentSchoolTerm()} Computer Science`,
    icon: "computer",
  },
  {
    url: "mailto:jcahyadi@uwaterloo.ca",
    description: "jcahyadi@uwaterloo.ca",
    icon: "email",
  },
  {
    url: "https://github.com/JamesCahyadi",
    description: "GitHub",
    icon: "github",
  },
  {
    url: "https://www.linkedin.com/in/j-cahyadi",
    description: "LinkedIn",
    icon: "linkedin",
  },
];
