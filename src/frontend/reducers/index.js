const reducer = (state, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        ...state,
      };
    default:
      return state;
  }
};

export default reducer;
