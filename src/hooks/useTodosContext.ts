import { useContext } from "react";
import { TodosContext } from "../context/TodosProvider";

export const useTodosContext = () => {
  const todosContext = useContext(TodosContext);

  if (todosContext === undefined) {
    throw new Error("useTodosContext must be used with TodosContext!");
  } else {
    return todosContext;
  }
};
