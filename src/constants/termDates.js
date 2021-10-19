export const TERMS = {
  WINTER: "winter",
  SPRING: "spring",
  FALL: "fall",
};

const TERM_RANGES = {
  [TERMS.WINTER]: "Jan - Apr",
  [TERMS.SPRING]: "May - Aug",
  [TERMS.FALL]: "Sep - Dec",
};

export const getTermDates = (term, year) => {
  return `${TERM_RANGES[term]} ${year}`;
};
