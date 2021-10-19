import frontrush from "assets/frontrush.png";
import geotabImg from "assets/geotab.png";
import htnImg from "assets/htn.png";
import starterHacksImg from "assets/starterhacks.png";
import techPlusImg from "assets/techPlus.jpeg";
import uwaterlooImg from "assets/uwaterloo.png";

const courseSequenceLink =
  "https://uwaterloo.ca/computing-financial-management/cfm-course-sequence-fall-2019";
const starterHacksLink = "https://www.starterhacks.ca/";
const coffeeNCode = "https://www.facebook.com/UWCoffeeNCode/";
const frontRush = "https://www.frontrush.com/web/";
const openHouse = "https://uwaterloo.ca/future-students/fall-open-house";
const hackTheNorth = "https://hackthenorth.com/";
const techPlusLink = "https://www.techplusuw.org/";
const geotabLink = "https://www.geotab.com/";
const deltaHacksLink = "https://www.deltahacks.com/";
const deltaHacksImg = "https://www.deltahacks.com/img/logolarge.b68d4072.png";

export const experiences = [
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "2B Term",
    date: "May - Aug 2021",
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
      "Trained machine learning models using <b>Tensorflow.js</b> to translate sign language into subtitles during video calls. Incorporated event-based and spontaneous communication among users by utilizing <b>Socket.io</b> and <b>WebRTC</b>.",
  },
  {
    logoImg: geotabImg,
    logoLink: geotabLink,
    heading: "Geotab",
    date: "Jan - Apr 2021",
    description:
      "Developed map visualization software using <b>Plotly</b> and <b>Mapbox</b> to allow traffic engineers to analyze navigation routes. Implemented frontend <b>caching</b> to optimize the software's performance and reduce backend load by over 60%",
  },
  {
    logoImg: techPlusImg,
    logoLink: techPlusLink,
    heading: "Tech+ UW",
    date: "Jan - Apr 2021",
    description:
      "Developed organization's landing page and portal while strictly adhering to <b>React's atomic design principles</b>. Implemented user authentication and authorization flow for mentors and mentees using <b>Auth0</b>.",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "2A Term",
    date: "Sep - Dec 2020",
    description: [
      "CS 246 Object-Oriented Software Development",
      "CS 245 Logic and Computation",
      "CS 241 Foundations of Sequential Programs",
      "STAT 230 Probability",
      "AFM 272 Corporate Finance 1",
    ],
  },
  {
    logoImg: frontrush,
    logoLink: frontRush,
    heading: "Front Rush",
    date: "May - Aug 2020",
    description:
      "Built front-end of the company's website and admin site using <b>JavaScript</b> and <b>HTML/CSS</b>. Wrote <b>SQL</b> queries against database to import data and complete investigative work into support tickets. Created <b>VBA</b> macros to clean and extract customer data.",
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
    date: "Jan - Apr 2020",
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
    logoLink: openHouse,
    heading: "Open House Program Representative",
    date: "Nov 2019",
    description:
      "Presented information about <b>Computing and Financial Management</b> to parents and future students",
  },
  {
    logoImg: hackTheNorth,
    logoLink: coffeeNCode,
    heading: "CoffeeNCode",
    date: "Oct - Nov 2019",
    description: "Used <b>Python</b> to make bots that compete in a battlefield game!",
  },
  {
    logoImg: htnImg,
    logoLink: hackTheNorth,
    heading: "Hack the North Volunteer",
    date: "Sep 2019",
    description: "Acted as a logistics volunteer to ensure the hackathon ran smoothly",
  },
  {
    logoImg: uwaterlooImg,
    logoLink: courseSequenceLink,
    heading: "1A Term",
    date: "Sep - Dec 2019",
    description: [
      "CS 135 Designing Functional Programs",
      "MATH 137 Calculus 1 for Honours Mathematics",
      "MATH 135 Algebra for Honours Mathematics",
      "AFM 101 Introduction to Financial Accounting",
      "AFM 132 Introduction to Business Stages",
    ],
  },
];
