import { useSelector, useDispatch } from "react-redux";
import { selectIsDarkTheme, toogleTheme } from "../themeSlice";
import { Button, Label, Wrapper, Icon} from "./styled";

const ThemeSwitcher = () => {
  const dispatch = useDispatch();
  const isDarkTheme = useSelector(selectIsDarkTheme);

  return (
    <Wrapper>
      <Button onClick={() => dispatch(toogleTheme())}>
        <Label>
        {isDarkTheme ? "Night" : "Day"} mode on
        </Label>
        <Icon />
      </Button>
    </Wrapper>
  );
}

export default ThemeSwitcher;