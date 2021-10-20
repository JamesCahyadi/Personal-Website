import { TERMS, getTermDates } from "constants/termDates";

import coffeeNCodeImg from "assets/coffee.png";
import frontrushImg from "assets/frontrush.png";
import geotabImg from "assets/geotab.png";
import hackTheNorthImg from "assets/htn.png";
import prodigyImg from "assets/prodigy.png";
import sparkImg from "assets/spark.jpeg";
import starterHacksImg from "assets/starterhacks.png";
import techPlusImg from "assets/techPlus.jpeg";
import uwaterlooImg from "assets/uwaterloo.png";

const deltaHacksImg = "https://www.deltahacks.com/img/logolarge.b68d4072.png";
const courseSequenceLink =
  "https://uwaterloo.ca/computing-financial-management/cfm-course-sequence-fall-2019";
const starterHacksLink = "https://www.starterhacks.ca/";
const coffeeNCodeLink = "https://www.facebook.com/UWCoffeeNCode/";
const frontrushLink = "https://www.frontrush.com/web/";
const openHouseLink = "https://uwaterloo.ca/future-students/fall-open-house";
const hackTheNorthLink = "https://hackthenorth.com/";
const techPlusLink = "https://www.techplusuw.org/";
const geotabLink = "https://www.geotab.com/";
const deltaHacksLink = "https://www.deltahacks.com/";
const prodigyLink = "https://www.prodigygame.com/Membership/";
const sparkLink = "https://sparknonprofit.webflow.io/";

export const experiences = [
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "3A Term",
    date: getTermDates(TERMS.WINTER, 2022),
    description: [
      "CS 350 Operating Systems",
      "CS 341 Algorithms",
      "CFM 301 Financial Data Analytics",
      "ENGL 119 Communications in Math & CS",
      "SPCOM 223 Public Speaking",
    ],
  },
  {
    logoImg: prodigyImg,
    logoLink: prodigyLink,
    heading: "Prodigy Education",
    date: getTermDates(TERMS.FALL, 2021),
    description: "Performed A/B tests and worked on self-serve upgrades for memberships",
  },
  {
    logoImg: sparkImg,
    logoLink: sparkLink,
    heading: "Spark",
    date: "Aug - Oct 2021",
    description: "Developed landing page to educate 500+ children in third-world countries",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "2B Term",
    date: getTermDates(TERMS.SPRING, 2021),
    description: [
      "CS 240 Data Structures and Data Management",
      "CS 251 Computer Organization and Design",
      "MATH 239 Introduction to Combinatorics",
      "STAT 231 Statistics",
      "AFM 372 Corporate Finance 2",
    ],
  },
  {
    logoImg: deltaHacksImg,
    logoLink: deltaHacksLink,
    heading: "DeltaHacks 7",
    date: "Mar 2021",
    description:
      "Trained machine learning models using Tensorflow.js to translate sign language into subtitles during video calls. Incorporated event-based and spontaneous communication among users by utilizing Socket.io and WebRTC.",
  },
  {
    logoImg: geotabImg,
    logoLink: geotabLink,
    heading: "Geotab",
    date: getTermDates(TERMS.WINTER, 2021),
    description:
      "Developed map visualization software using Plotly and Mapbox to allow traffic engineers to analyze navigation routes. Implemented frontend caching to optimize the software's performance and reduce backend load by over 60%",
  },
  {
    logoImg: techPlusImg,
    logoLink: techPlusLink,
    heading: "Tech+ UW",
    date: getTermDates(TERMS.WINTER, 2021),
    description:
      "Developed organization's landing page and portal while strictly adhering to React's atomic design principles. Implemented user authentication and authorization flow for mentors and mentees using Auth0.",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "2A Term",
    date: getTermDates(TERMS.FALL, 2020),
    description: [
      "CS 246 Object-Oriented Software Development",
      "CS 245 Logic and Computation",
      "CS 241 Foundations of Sequential Programs",
      "STAT 230 Probability",
      "AFM 272 Corporate Finance 1",
    ],
  },
  {
    logoImg: frontrushImg,
    logoLink: frontrushLink,
    heading: "Front Rush",
    date: getTermDates(TERMS.SPRING, 2020),
    description:
      "Built front-end of the company's website and admin site using JavaScript and HTML/CSS. Wrote SQL queries against database to import data and complete investigative work into support tickets. Created VBA macros to clean and extract customer data.",
  },
  {
    logoImg: starterHacksImg,
    logoLink: starterHacksLink,
    heading: "StarterHacks",
    date: "Jan 2020",
    description: "Attended first hackathon",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "1B Term",
    date: getTermDates(TERMS.WINTER, 2019),
    description: [
      "CS 136 Elementary Algorithm Design and Data Abstraction",
      "MATH 138 Calculus 2 for Honours Mathematics",
      "MATH 136 Linear Algebra for Honours Mathematics",
      "AFM 121 Introduction to Global Financial Markets",
      "AFM 102 Introduction to Managerial Accounting",
    ],
  },
  {
    logoImg: uwaterlooImg,
    logoLink: openHouseLink,
    heading: "Open House Program Representative",
    date: "Nov 2019",
    description:
      "Presented information about Computing and Financial Management to parents and future students",
  },
  {
    logoImg: coffeeNCodeImg,
    logoLink: coffeeNCodeLink,
    heading: "CoffeeNCode",
    date: "Oct - Nov 2019",
    description: "Used Python to make bots that compete in a battlefield game!",
  },
  {
    logoImg: hackTheNorthImg,
    logoLink: hackTheNorthLink,
    heading: "Hack the North Volunteer",
    date: "Sep 2019",
    description: "Acted as a logistics volunteer to ensure the hackathon ran smoothly",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "1A Term",
    date: getTermDates(TERMS.FALL, 2019),
    description: [
      "CS 135 Designing Functional Programs",
      "MATH 137 Calculus 1 for Honours Mathematics",
      "MATH 135 Algebra for Honours Mathematics",
      "AFM 101 Introduction to Financial Accounting",
      "AFM 132 Introduction to Business Stages",
    ],
  },
];