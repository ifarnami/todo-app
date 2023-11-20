import { useContext } from "react";
import { ThemeContext } from "../context/ThemeProvider";

export const useThemeContext = () => {
  const themeContext = useContext(ThemeContext);

  if (themeContext === undefined) {
    throw new Error("useThemeContext must be used with a ThemeContext!");
  } else {
    return themeContext;
  }
};
