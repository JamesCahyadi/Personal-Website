import ReactGA from "react-ga";

export const GAevent = (categoryName, eventName, labelName) => {
  return ReactGA.event({
    category: categoryName,
    action: eventName,
    label: labelName,
  });
};
