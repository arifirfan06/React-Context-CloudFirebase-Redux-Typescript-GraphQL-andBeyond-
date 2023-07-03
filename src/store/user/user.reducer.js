  import { createSlice } from "@reduxjs/toolkit";
  
  // THIS REDUCE HUMAN ERROR
  // With namespace in redux toolkit you dont need types
  export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };
  const INITIAL_STATE = {
    currentUser: null,
  };


  export const userSlice = createSlice({
    name: 'user',
    initialState: INITIAL_STATE,
    reducers: {
      setCurrentUser(state, action) {
        state.currentUser = action.payload
        // code above same as {...state,currentUser: payload,}; its both immutable
      }
    }
  })

  export const {setCurrentUser} = userSlice.actions
  export const userReducer = userSlice.reducer

  //initial state attached in reducer function parameter
  // export const userReducerOld = (state = INITIAL_STATE, action) => {
  //   console.log("dispatched");
  //   console.log(action);
  //   const { type, payload } = action;
  //   switch (type) {
  //     case USER_ACTION_TYPES.SET_CURRENT_USER:
  //       // with ... it keep previous states data and overwrite some data with the newer data
  //       return {
  //         ...state,
  //         currentUser: payload,
  //       };
  //     // case 'increment':
  //     // return {
  //     //   value: state.value + 1
  //     // }
  //     default:
  //       return state;
  //   }
  // };