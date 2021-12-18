import { ReactComponent as HumidityIcon } from "./icons/humidity.svg";
import { ReactComponent as WindIcon } from "./icons/wind.svg";
import { ReactComponent as PressureIcon } from "./icons/pressure.svg";
import { ReactComponent as SunriseIcon } from "./icons/sunrise.svg";
import { ReactComponent as SunsetIcon } from "./icons/sunset.svg";
import { ReactComponent as PrecipitationIcon } from "./icons/precipitation.svg";

export const switchTileType = type => {
  switch (type) {
    case ("sunrise"):
      return {
        title: "Sunrise",
        icon: <SunriseIcon />,
      }
    case ("sunset"):
      return {
        title: "Sunset",
        icon: <SunsetIcon />,
      }
    case ("pressure"):
      return {
        title: "Air Pressure",
        icon: <PressureIcon />,
      }
    case ("humidity"):
      return {
        title: "Humidity",
        icon: <HumidityIcon />,
      }
    case ("wind"):
      return {
        title: "Wind speed",
        icon: <WindIcon />,
      }
      case ("precipitation"):
      return {
        title: "Probability of precipitation",
        icon: <PrecipitationIcon />,
      }
    default:
      return {
        title: "",
        icon: <></>,
      }
  }
};