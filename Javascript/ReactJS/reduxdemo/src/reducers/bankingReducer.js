export const initialState = {
  balance: 0,
  isSavings: true,
  isCurrent: true,
  
};

export function bankingReducer(state = initialState, action) {
  switch (action.type) {
    case "deposit":
      return {
        balance: state.balance + action.payload,
        isSavings: true,
        isCurrent: true,
      };
    case "withdraw":
      return {
        balance: state.balance - action.payload,
        isSavings: true,
        isCurrent: true,
      };
    case "interest":
      return {
        balance: state.balance * 1.04,
        isSavings: true,
        isCurrent: true,

      };
    case "delete":
      return { balance: 0, isSavings: true, isCurrent: true };
    case "change-saving":
      return { balance: state.balance, isSavings: !state.isSavings, isCurrent: true };
    case "change-current":
      return { balance: state.balance, isSavings: true, isCurrent: !state.isCurrent };
    default:
      return state;
  }
}
