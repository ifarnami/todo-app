import { useContext } from "react";
import { GoSearch } from "react-icons/go";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeProvider";
import { TodosContext } from "../../context/TodosProvider";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const { isDark, changeTheme } = useContext(ThemeContext);
  const { searchForTodo } = useContext(TodosContext);

  const handleClick = () => {
    changeTheme();
  };

  const handleChange = (e) => {
    searchForTodo(e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl dark:text-white-primary">TODO LIST</h1>
      <div className="flex gap-4">
        <div className="flex items-center justify-between py-0.5 px-3 rounded-md border-2 border-purple-secondary dark:border-white-primary">
          <input
            className="w-[500px] bg-white-primary dark:bg-black-primary dark:text-white-primary outline-none text-md pr-2"
            type="text"
            placeholder="Search note..."
            onChange={handleChange}
          />
          <div className="cursor-pointer dark:text-white-primary">
            <GoSearch />
          </div>
        </div>
        <select
          defaultValue={"ALL"}
          className="p-2 rounded-md bg-purple-primary outline-none text-white-primary cursor-pointer hover:bg-purple-secondary transition-colors"
          name="tags"
          id="tags"
        >
          <option value="ALL">ALL</option>
        </select>
        <button
          onClick={handleClick}
          className="bg-purple-primary w-12 rounded-md flex justify-center items-center text-2xl font-extralight text-white-primary hover:bg-purple-secondary"
        >
          {isDark ? <FiSun /> : <FiMoon />}
        </button>
      </div>
    </div>
  );
};

export default Header;
