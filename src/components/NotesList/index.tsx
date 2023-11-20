import Note from "./components/Note";
import { useTodosContext } from "../../hooks/useTodosContext";

interface INotesListProps {}

const NotesList: React.FC<INotesListProps> = (): JSX.Element => {
  const { todos } = useTodosContext();

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
