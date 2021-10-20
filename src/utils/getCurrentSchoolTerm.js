import { experiences } from "views/Experience/Experience.data";

export const getCurrentSchoolTerm = () => {
  let schoolTerm = "";

  for (let i = 0; i < experiences.length; i++) {
    const { heading } = experiences[i];
    if (heading.includes("Term")) {
      schoolTerm = heading.split(" ")[0];
      break;
    }
  }

  return schoolTerm;
};
