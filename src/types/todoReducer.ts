export interface TodoState {
  todos: any[];
  loading: boolean;
  error: null | string;
  page: number;
  limit: number;
}

export enum TodoActionTypes {
  FETCH_TODO = "FETCH_TODO",
  FETCH_TODO_SUCCESS = "FETCH_TODO_SUCCESS",
  FETCH_TODO_ERROR = "FETCH_TODO_ERROR",
  SET_TODO_PAGE = "SET_TODO_PAGE",
}
interface fetchTodoAction {
  type: TodoActionTypes.FETCH_TODO;
}
interface fetchTodoSuccesAction {
  type: TodoActionTypes.FETCH_TODO_SUCCESS;
  payload: any[];
}
interface fetchTodoErrorAction {
  type: TodoActionTypes.FETCH_TODO_ERROR;
  payload: string;
}
interface setTodoPage {
  type: TodoActionTypes.SET_TODO_PAGE;
  payload: number;
}

export type TodoAction =
   fetchTodoAction
  | fetchTodoSuccesAction
  | fetchTodoErrorAction
  | setTodoPage;
