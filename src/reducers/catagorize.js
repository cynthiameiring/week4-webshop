export default (state = [], action) => {
  switch (action.type) {
    case "SET_NEW_PRODUCTS":
      return action.payload;
    default:
      return state;
  }
};
