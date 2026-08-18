export type FormatType = "capitalCase" | "lowerCase";

export const inputFormating = (value: string, format: FormatType): string => {
  let newValue;
  if (format === "capitalCase") {
    newValue = value?.slice(0, 1).toUpperCase() + value?.slice(1).toLowerCase();

    return newValue;
  } else {
    return value;
  }
};
