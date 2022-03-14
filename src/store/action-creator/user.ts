import axios from "axios";
import { Dispatch } from "redux";
import { UserAction, UserActionTypes } from "../../types/todo";

export const fetchUsers = () => {
  return async (dispatch: Dispatch<UserAction>) => {
    try {
      dispatch({ type: UserActionTypes.FETCH_USERS });
      const res = await axios.get("https://jsonplaceholder.typicode.com/users");
      dispatch({
        type: UserActionTypes.FETCH_USERS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      dispatch({ type: UserActionTypes.FETCH_USERS_ERROR, payload: "erorr" });
    }
  };
};
