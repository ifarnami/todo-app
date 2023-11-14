import { useContext, useState } from "react";
import { MdAddCircle } from "react-icons/md";
import { FiMoon, FiSun } from "react-icons/fi";
import { ThemeContext } from "../../context/ThemeProvider";
import { TodosContext } from "../../context/TodosProvider";

interface IHeaderProps {}

const Header: React.FC<IHeaderProps> = (): JSX.Element => {
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const { isDark, changeTheme } = useContext(ThemeContext);
  const { addTodo } = useContext(TodosContext);

  const handleClick = () => {
    changeTheme !== undefined && changeTheme();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewTodoTitle(e.target.value);
  };

  const handleAddTodo = () => {
    addTodo !== undefined && newTodoTitle.length && addTodo(newTodoTitle);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <h1 className="text-2xl dark:text-white-primary">TODO LIST</h1>
      <div className="flex gap-4">
        <div className="flex items-center justify-between py-0.5 px-3 rounded-md border-2 border-purple-secondary dark:border-white-primary">
          <input
            className="w-[620px] bg-white-primary dark:bg-black-primary dark:text-white-primary outline-none text-md pr-2"
            type="text"
            placeholder="Search note..."
            value={newTodoTitle}
            onChange={handleChange}
          />
          <div
            onClick={handleAddTodo}
            className="cursor-pointer text-2xl text-purple-primary dark:text-white-primary"
          >
            <MdAddCircle />
          </div>
        </div>
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
