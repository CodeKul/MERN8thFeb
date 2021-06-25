export const initialState = {
  balance: 0,
};

export function bankingReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return { balance: state.balance + action.payload };
    case "withdraw":
      return { balance: state.balance - action.payload };
    case "default":
      return state;
  }
}
