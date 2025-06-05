export const capitalize = (text: string) =>
  text.charAt(0).toUpperCase() + text.slice(1).toLowerCase();

export const formatDateTime = (dateTime: string, language: string) => {
  const date = new Date(dateTime);
  return new Intl.DateTimeFormat(language, {
    dateStyle: "short",
    timeStyle: "short",
  }).format(date);
};
