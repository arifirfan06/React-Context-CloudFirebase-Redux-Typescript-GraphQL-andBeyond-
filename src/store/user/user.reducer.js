  // THIS REDUCE HUMAN ERROR
  export const USER_ACTION_TYPES = {
    SET_CURRENT_USER: "SET_CURRENT_USER",
  };
  const INITIAL_STATE = {
    currentUser: null,
  };
  //initial state attached in reducer function parameter
  export const userReducer = (state = INITIAL_STATE, action) => {
    console.log("dispatched");
    console.log(action);
    const { type, payload } = action;
    switch (type) {
      case USER_ACTION_TYPES.SET_CURRENT_USER:
        // with ... it keep previous states data and overwrite some data with the newer data
        return {
          ...state,
          currentUser: payload,
        };
      // case 'increment':
      // return {
      //   value: state.value + 1
      // }
      default:
        return state;
    }
  };