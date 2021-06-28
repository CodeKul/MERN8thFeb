export const initState = {
  isLoggedIn: false,
};

export const authReducer = (state = initState, action) => {
  switch (action.type) {
    case "check-auth":
      return { isLoggedIn: !state.isLoggedIn };
    default:
      return state;
  }
};
