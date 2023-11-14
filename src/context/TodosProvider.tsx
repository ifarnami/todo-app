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

const TodosContext = createContext({});

const TodosProvider: React.FC<ITodosProviderProps> = ({
  children,
}): JSX.Element => {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    const fetchTodos = async () => {
      await axios("https://jsonplaceholder.typicode.com/todos")
        .then((res) => {
          setTodos(res.data);
        })
        .catch((err) => console.log(err));
    };
    toast.promise(fetchTodos, {
      pending: "Getting list from server",
      success: "Connected to server👌",
      error: "Connection rejected 🤯",
    });
    fetchTodos();
  }, []);

  const editTodo = (newTitle: string, id: number) => {
    todos.find((todo) => todo.id === id && (todo.title = newTitle));
  };

  const removeTodo = (id: number) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const searchForTodo = (searchParam: string) => {
    setSearch(searchParam);
  };

  return (
    <TodosContext.Provider
      value={{ todos, setTodos, editTodo, removeTodo, searchForTodo, search }}
    >
      {children}
    </TodosContext.Provider>
  );
};

export default TodosProvider;
export { TodosContext };
