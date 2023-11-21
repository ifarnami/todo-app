import axios from "axios";
import { createContext, useEffect, useState } from "react";
import { toast } from "react-toastify";

interface ITodosProviderProps {
  children: JSX.Element | JSX.Element[];
}

type Todo = {
  title: string;
  id: number;
  userId: number;
  completed: boolean;
};

type TTodoContext = {
  todos: Todo[];
  editTodo: (newTitle: string, id: number) => void;
  removeTodo: (id: number) => void;
  addTodo: (newTitle: string) => void;
};

const TodosContext = createContext<TTodoContext | undefined>(undefined);

const TodosProvider: React.FC<ITodosProviderProps> = ({
  children,
}): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);

  useEffect(() => {
    const fetchTodos = async () => {
      await axios("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res.data);
        })
        .catch((err) => console.log(err));
    };
    toast.promise(fetchTodos, {
      pending: "❕Getting list from server",
      success: "💯Connected to server",
      error: "❌Connection rejected",
    });
    fetchTodos();
  }, []);

  const editTodo = (newTitle: string, id: number) => {
    const selectedTodo = todos.find(
      (todo) => todo.id === id && (todo.title = newTitle)
    );
    if (selectedTodo !== undefined) {
      selectedTodo.title = newTitle;
    }
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
    toast.error(`item has been removed`);
  };

  const addTodo = (title: string) => {
    setTodos([
      ...todos,
      {
        title,
        completed: false,
        userId: 1,
        id: todos[todos.length - 1].id + 1,
      },
    ]);
    toast.success(`item has been added`);
  };

  return (
    <TodosContext.Provider
      value={{
        todos,
        editTodo,
        removeTodo,
        addTodo,
      }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
export { TodosContext };
