import { useContext } from "react";
import { TodosContext } from "../../context/TodosProvider";
import Note from "./components/Note";

interface INotesListProps {}

const NotesList: React.FC<INotesListProps> = (): JSX.Element => {
  const { todos, search } = useContext(TodosContext);

  return (
    <div className="overflow-y-scroll">
      {todos.length ? (
        todos.map((todo) => {
          const { title, completed, id } = todo;
          return <Note title={title} completed={completed} key={id} id={id} />;
        })
      ) : (
        <></>
      )}
    </div>
  );
};

export default NotesList;
