export const GAevent = (categoryName, eventName, labelName) => {
  ReactGA.event({
    category: categoryName,
    action: eventName,
    label: labelName,
  });
};
