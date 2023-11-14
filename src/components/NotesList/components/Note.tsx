import { useContext, useState } from "react";
import "./Note.css";
import { LuPencil } from "react-icons/lu";
import { TfiTrash } from "react-icons/tfi";
import { TodosContext } from "../../../context/TodosProvider";

interface INoteProps {
  title: string;
  completed: boolean;
  id: number;
}

const Note: React.FC<INoteProps> = ({ title, completed, id }): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { removeTodo } = useContext(TodosContext);

  const handleTrashCick = () => {
    removeTodo(id);
  };

  const handleUncheck = () => {
    setIsCompleted((ic) => !ic);
  };

  return (
    <div className="w-full py-4 px-20 flex justify-between items-center">
      <div className="flex gap-3 items-center">
        <div onClick={handleUncheck} className="checkbox-wrapper-11">
          <input
            id={`${id}`}
            type="checkbox"
            name="r"
            value="2"
            checked={isCompleted}
            onChange={handleUncheck}
          />
          <label className="text-xl dark:text-white-primary" htmlFor={`${id}`}>
            {title}
          </label>
        </div>
      </div>
      <div className="flex gap-5">
        <div className="text-gray cursor-pointer hover:text-black-primary dark:hover:text-white-primary transition-colors">
          <LuPencil />
        </div>
        <div
          onClick={handleTrashCick}
          className="text-gray cursor-pointer hover:text-black-primary dark:hover:text-white-primary transition-colors"
        >
          <TfiTrash />
        </div>
      </div>
    </div>
  );
};

export default Note;
