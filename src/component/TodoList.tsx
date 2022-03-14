import React, { useEffect } from "react";
import { useActions } from "./hooks/useActions";
import { useTypesSelector } from "./hooks/useTypesSelector";

const TodoList: React.FC = () => {
  const { page, error, todos, limit, loading } = useTypesSelector(
    (state) => state.todo
  );
  const { fetchTodo } = useActions();
  useEffect(() => {
    fetchTodo(page, limit);
  }, []);
  if (loading) {
    return <h1>идет загрузка</h1>;
  }
  if (error) {
    return <h1>{error}</h1>;
  }
  const pages = [1, 2, 3, 4, 5];
  return (
    <div>
      {todos.map((todo) => {
        return (
          <div key={todo.id}>
            {" "}
            {todo.id} - {todo.title}
          </div>
        );
      })}
      <div style={{ display: "flex" }}>
        {pages.map((e) => {
          return (
            <div
              onClick={() => fetchTodo(e)}
              style={{
                border: "1px solid green",
                padding: "10px",
                cursor: "pointer",
              }}
            >
              {e}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TodoList;
