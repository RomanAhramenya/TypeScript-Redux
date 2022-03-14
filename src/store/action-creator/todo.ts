import axios from "axios";
import { Dispatch } from "redux";

import { TodoAction, TodoActionTypes } from "../../types/todoReducer";

export const fetchTodo = (page = 1, limit = 10) => {
  return async (dispatch: Dispatch<TodoAction>) => {
    try {
      dispatch({ type: TodoActionTypes.FETCH_TODO });
      const res = await axios.get(
        "https://jsonplaceholder.typicode.com/todos",
        {
          params: { _page: page, _limit: limit },
        }
      );
      dispatch({ type: TodoActionTypes.FETCH_TODO_SUCCESS, payload: res.data });
    } catch (error) {
      dispatch({ type: TodoActionTypes.FETCH_TODO_ERROR, payload: "erorr" });
    }
  };
};
export function setTodoPage(page: number): TodoAction {
  return {
    type: TodoActionTypes.SET_TODO_PAGE,
    payload: page,
  };
}
