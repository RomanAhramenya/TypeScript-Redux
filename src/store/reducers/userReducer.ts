import { UserState, UserAction, UserActionTypes } from "../../types/todo";

const initiallState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = (
  state = initiallState,
  action: UserAction
): UserState => {
  switch (action.type) {
    case UserActionTypes.FETCH_USERS:
      return {
        loading: true,
        error: null,
        users: [],
      };
    case UserActionTypes.FETCH_USERS_SUCCESS:
      return {
        loading: false,
        error: null,
        users: action.payload,
      };
    case UserActionTypes.FETCH_USERS_ERROR:
      return {
        loading: true,
        error: action.payload,
        users: [],
      };

    default:
      return state;
  }
};
