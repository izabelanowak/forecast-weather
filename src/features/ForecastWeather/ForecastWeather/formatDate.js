export const formatDate = date => date.toLocaleDateString(
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

export const getWeekday = date => date.toLocaleDateString(
  undefined,
  {
    weekday: "long",
  },
);

export const getDate = date => date.toLocaleDateString(
  undefined,
  {
    day: "numeric",
    month: "long",
    year: "numeric",
  },
);

export const getTime = date => date.toLocaleTimeString(
  undefined,
  {
    hour: "numeric",
    minute: "numeric",
  },
);