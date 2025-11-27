const getPaddingClass = ({ padding, paddingTop, paddingBottom }) => {
  if (padding) return `py-${padding}`;
  const classes = [];
  if (paddingTop) classes.push(`pt-${paddingTop}`);
  if (paddingBottom) classes.push(`pb-${paddingBottom}`);
  return classes.join(" ");
};
const getBackgroundColor = (background = "base") => {
  const bgColors = {
    base: "bg-background-base",
    light: "bg-background-light",
    dark: "bg-background-dark"
  };
  return bgColors[background];
};
const getTextColor = (background = "base") => {
  const textColors = {
    base: "text-body-base",
    light: "text-body-light",
    dark: "text-body-dark"
  };
  return textColors[background];
};
const getHeadlineColor = (background = "base") => {
  const headlineColors = {
    base: "text-headline",
    light: "text-headline-light",
    dark: "text-headline-dark"
  };
  return headlineColors[background];
};
const getEyebrowColor = (background = "base") => {
  const eyebrowColors = {
    base: "text-eyebrow",
    light: "text-eyebrow-light",
    dark: "text-eyebrow-dark"
  };
  return eyebrowColors[background];
};
const getInputBackgroundColor = (background = "base") => {
  const inputBgColors = {
    base: "bg-input",
    light: "bg-input-light",
    dark: "bg-input-dark"
  };
  return inputBgColors[background];
};
const getInputTextColor = (background = "base") => {
  const inputTextColors = {
    base: "text-input-text",
    light: "text-input-text-light",
    dark: "text-input-text-dark"
  };
  return inputTextColors[background];
};

export { getInputBackgroundColor as a, getInputTextColor as b, getBackgroundColor as c, getPaddingClass as d, getTextColor as e, getEyebrowColor as f, getHeadlineColor as g };
