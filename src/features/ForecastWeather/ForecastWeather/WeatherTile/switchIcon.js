import { ReactComponent as I01d } from "./icons/01d.svg";
import { ReactComponent as I01n } from "./icons/01n.svg";
import { ReactComponent as I02d } from "./icons/02d.svg";
import { ReactComponent as I02n } from "./icons/02n.svg";
import { ReactComponent as I03d } from "./icons/03d.svg";
import { ReactComponent as I03n } from "./icons/03n.svg";
import { ReactComponent as I04d } from "./icons/04d.svg";
import { ReactComponent as I04n } from "./icons/04n.svg";
import { ReactComponent as I09d } from "./icons/09d.svg";
import { ReactComponent as I09n } from "./icons/09n.svg";
import { ReactComponent as I10d } from "./icons/10d.svg";
import { ReactComponent as I10n } from "./icons/10n.svg";
import { ReactComponent as I11d } from "./icons/11d.svg";
import { ReactComponent as I11n } from "./icons/11n.svg";
import { ReactComponent as I13d } from "./icons/13d.svg";
import { ReactComponent as I13n } from "./icons/13n.svg";
import { ReactComponent as I50d } from "./icons/50d.svg";
import { ReactComponent as I50n } from "./icons/50n.svg";

export const switchIcon = (iconCode) => {
  switch (iconCode) {
    case ("01d"):
      return <I01d />;
    case ("01n"):
      return <I01n />;
    case ("02d"):
      return <I02d />;
    case ("02n"):
      return <I02n />;
    case ("03d"):
      return <I03d />;
    case ("03n"):
      return <I03n />;
    case ("04d"):
      return <I04d />;
    case ("04n"):
      return <I04n />;
    case ("09d"):
      return <I09d />;
    case ("09n"):
      return <I09n />;
    case ("10d"):
      return <I10d />;
    case ("10n"):
      return <I10n />;
    case ("11d"):
      return <I11d />;
    case ("11n"):
      return <I11n />;
    case ("13d"):
      return <I13d />;
    case ("13n"):
      return <I13n />;
    case ("50d"):
      return <I50d />;
    case ("50n"):
      return <I50n />;
    default:
  }
};