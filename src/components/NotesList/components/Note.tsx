import { useState } from "react";
import "./Note.css";
import { TfiTrash } from "react-icons/tfi";
import { CiEdit } from "react-icons/ci";
import { useTodosContext } from "../../../hooks/useTodosContext";

interface INoteProps {
  title: string;
  completed: boolean;
  id: number;
}

const Note: React.FC<INoteProps> = ({ title, completed, id }): JSX.Element => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const [edit, setEdit] = useState({
    editing: false,
    title: "",
  });
  const { removeTodo, editTodo } = useTodosContext();

  const handleTrashCick = () => {
    removeTodo(id);
  };

  const handleUncheck = () => {
    setIsCompleted((ic) => !ic);
  };

  const handleEditing = () => {
    setEdit({
      ...edit,
      editing: true,
    });
  };

  const handleNewTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEdit({
      ...edit,
      title: e.target.value,
    });
  };

  const saveNewTitle = () => {
    title = edit.title;
    editTodo(edit.title, id);
    setEdit({
      ...edit,
      editing: false,
    });
  };

  return (
    <>
      <div className="w-full py-4 px-20 flex justify-between items-center note">
        {!edit.editing ? (
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
        ) : (
          <div className="flex gap-2">
            <label className="dark:text-white-primary">New Title:</label>
            <input
              className="outline-none border border-green dark:bg-black-primary dark:text-white-primary"
              type="text"
              onChange={handleNewTitle}
            />
            <button onClick={saveNewTitle} className="bg-gray rounded-md px-4">
              Save
            </button>
          </div>
        )}

        <div className="flex gap-3 items-center">
          <div
            onClick={handleTrashCick}
            className="text-gray cursor-pointer hover:text-red-danger transition-colors delete"
          >
            <TfiTrash />
          </div>
          <div
            onClick={handleEditing}
            className="text-gray cursor-pointer text-xl hover:text-green transition-colors delete"
          >
            <CiEdit />
          </div>
        </div>
      </div>
      <div className="w-3/4 h-[1.5px] bg-purple-light dark:bg-purple-secondary mx-auto"></div>
    </>
  );
};

export default Note;
