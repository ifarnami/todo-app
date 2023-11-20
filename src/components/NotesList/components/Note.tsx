import { useState } from "react";
import "./Note.css";
import { TfiTrash } from "react-icons/tfi";
import { useTodosContext } from "../../../hooks/useTodosContext";

interface INoteProps {
  title: string;
  completed: boolean;
  id: number;
}

const Note: React.FC<INoteProps> = ({ title, completed, id }): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const { removeTodo } = useTodosContext();

  const handleTrashCick = () => {
    removeTodo(id);
  };

  const handleUncheck = () => {
    setIsCompleted((ic) => !ic);
  };

  return (
    <>
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
            <label
              className="text-xl dark:text-white-primary"
              htmlFor={`${id}`}
            >
              {title}
            </label>
          </div>
        </div>

        <div
          onClick={handleTrashCick}
          className="text-gray cursor-pointer hover:text-red-danger transition-colors"
        >
          <TfiTrash />
        </div>
      </div>
      <div className="w-3/4 h-[1.5px] bg-purple-light dark:bg-purple-secondary mx-auto"></div>
    </>
  );
};

export default Note;
