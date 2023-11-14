import { createContext, useState } from "react";

interface IThemeProvider {
  children: JSX.Element | JSX.Element[];
}

type TContext = {
  isDark?: boolean;
  changeTheme?: () => void;
};

const ThemeContext = createContext<TContext>({});

const ThemeProvider: React.FC<IThemeProvider> = ({ children }): JSX.Element => {
  const [isDark, setIsDark] = useState(
    document.documentElement.classList.contains("dark")
  );

  const changeTheme = () => {
    document.documentElement.classList.toggle("dark");
    setIsDark((ID) => !ID);
  };

  return (
    <ThemeContext.Provider value={{ isDark, changeTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
export { ThemeContext };
