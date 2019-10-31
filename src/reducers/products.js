export default (state = [], action) => {
  switch (action.type) {
    case "SET_PRODUCTS":
      if (state.length === 0) {
        return action.payload;
      }
    default:
      return state;
  }
};
