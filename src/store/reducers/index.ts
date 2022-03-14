import { userReducer } from "./userReducer";
import { combineReducers } from "redux";
import { todoReduser } from "./todoR";
export const rootReducer = combineReducers({
  user: userReducer,
  todo: todoReduser,
});

export type RootState = ReturnType<typeof rootReducer>;
