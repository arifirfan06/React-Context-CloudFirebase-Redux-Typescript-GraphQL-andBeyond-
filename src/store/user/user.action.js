import { USER_ACTION_TYPES } from "./user.type";
import { createAction } from "../../utils/reducer.utils";

 export const setCurrentUser = (user) => {
    return ({ type: USER_ACTION_TYPES.SET_CURRENT_USER, payload: user});
    // createAction(USER_ACTION_TYPES.SET_CURRENT_USER, user)
    
    //be sure to return a value
  };