const average = array => array.reduce(
  (currentSum, item) => currentSum + item,
  0,
) / array.length;

export const getAveragePressure = weatherList => average(
  weatherList.map(({ main }) => main.pressure),
);