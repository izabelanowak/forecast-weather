export const formatDate = (date) => date.toLocaleDateString(
  undefined,
  {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  },
);